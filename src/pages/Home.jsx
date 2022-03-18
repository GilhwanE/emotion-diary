import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MyHeader from './../components/MyHeader';

const Home = () => {
  const [curDate, setCurDate] = useState(new Date());

  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월 `;

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div>
      <MyHeader
        headeText={headText}
        leftChild={<MyButton text={'<'} onClick={decreaseMonth} />}
        rightChild={<MyButton text={'>'} onClick={increaseMonth} />}
      />
    </div>
  );
};

export default Home;
