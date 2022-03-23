import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { DiaryDispatchContext } from '../App';
import EmotionItem from './EmotionItem';
import MyButton from './MyButton';
import MyHeader from './MyHeader';
import { emotionList } from '../util/emotion';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState('');

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);

  const navigate = useNavigate();

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      alert('일기 내용을 입력해주세요');
      return; //더이상 진행되지 않도록 리턴
    }

    if (
      window.confirm(
        isEdit ? '일기를 수정하시겠습니까?' : '일기를 작성하시겠습니까?'
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <>
      <MyHeader
        headeText={isEdit ? '일기 수정하기' : '새 일기 작성하기'}
        leftChild={<MyButton text={'뒤로 가기'} onClick={() => navigate(-1)} />}
      />

      <div className="DiaryEditor">
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input
              className="input_date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>

        <section>
          <h4>오늘의 감정</h4>
          <div className="input_box emotion_list_wrapper">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
        </section>

        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea
              ref={contentRef}
              placeholder="오늘은 어땠나요?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </section>

        <section>
          <div className="control_box">
            <MyButton text={'취소하기'} onClick={() => navigate(-1)} />
            <MyButton
              text={'작성완료'}
              type={'positive'}
              onClick={handleSubmit}
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default DiaryEditor;
