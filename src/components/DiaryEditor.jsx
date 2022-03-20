import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import MyButton from './MyButton';
import MyHeader from './MyHeader';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = (props) => {
  const [date, setDate] = useState(getStringDate(new Date()));
  const navigate = useNavigate();
  return (
    <>
      <MyHeader
        headeText={'새 일기 쓰기'}
        leftChild={<MyButton text={'뒤로 가기'} onClick={() => navigate(-1)} />}
      />

      <div>
        <section>
          <h5>오늘은 언제인가요?</h5>
          <div className="input_box">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
      </div>
    </>
  );
};
export default DiaryEditor;
