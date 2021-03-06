import React from 'react';
import { useNavigate } from 'react-router';
import MyButton from './MyButton';

const DiaryItem = ({ id, emotion, content, date }) => {
  const strdate = new Date(parseInt(date)).toLocaleDateString();
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`diary/${id}`);
  };
  const goEdit = () => {
    navigate(`edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          'emotion_img_wrapper',
          `emotion_img_wrapper_${emotion}`,
        ].join(' ')}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="emotion_img"
        />
      </div>
      <div onClick={goDetail} className="info_wrapper">
        <div className="diary_date">{strdate}</div>
        <div className="diary_content_preview">{content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={'수정하기'} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
