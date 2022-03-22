import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DiaryStateContext } from '../App';
import DiaryList from '../components/DiaryList';
import MyButton from '../components/MyButton';
import MyHeader from '../components/MyHeader';
import emotionList from '../util/emotion.js';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Diary = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const diaryList = useContext(DiaryStateContext);

  useEffect(() => {
    if (diaryList.length >= 1) {
      //
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
        console.log(targetDiary);
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

        <div>오늘의 감정</div>
      </div>
    );
  }
};

export default Diary;
