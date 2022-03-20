import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { DiaryDispatchContext } from '../App';
import EmotionItem from './EmotionItem';
import MyButton from './MyButton';
import MyHeader from './MyHeader';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_desc: '완전 나쁨',
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_desc: '나쁨',
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_desc: '그럭저럭',
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_desc: '좋음',
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_desc: '완전 좋음',
  },
];

const DiaryEditor = (props) => {
  const contentRef = useRef();
  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState('');

  const { onCreate } = useContext(DiaryDispatchContext);

  const navigate = useNavigate();

  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focuse();
      return; //더이상 진행되지 않도록 리턴
    }
    onCreate(date, content, emotion);
    navigate('/', { replace: true });
  };

  return (
    <>
      <MyHeader
        headeText={'새 일기 쓰기'}
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
