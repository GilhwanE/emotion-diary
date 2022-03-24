import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import { emotionList } from '../util/emotion';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Diary = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    const titlename = document.getElementsByTagName('title')[0];
    titlename.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      //
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        // 일기가 없을때
        alert('존재하지 않는 일기입니다.');
        navigate('/', { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">로딩중입니다...</div>;
  } else {
    const emotionitem = emotionList.find(
      (it) => it.emotion_id === data.emotion
    );
    return (
      <div className="DiaryPage">
        <MyHeader
          headeText={`${getStringDate(new Date(data.date))} 기록`}
          leftChild={
            <MyButton text={'뒤로가기'} onClick={() => navigate(-1)} />
          }
          rightChild={
            <MyButton
              text={'수정하기'}
              type={'positive'}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />

        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                'diary_img_wrapper',
                `diary_img_wrapper_${emotionitem.emotion_id}`,
              ].join(' ')}
            >
              <img src={emotionitem.emotion_img} alt="감정 이미지" />
              <div className="emotion_desc">{emotionitem.emotion_desc}</div>
            </div>
          </section>

          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrppaer">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
};

export default Diary;
