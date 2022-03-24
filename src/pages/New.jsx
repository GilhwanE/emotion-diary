import React, { useEffect } from 'react';
import DiaryEditor from '../components/DiaryEditor';

const New = (props) => {
  useEffect(() => {
    const titlename = document.getElementsByTagName('title')[0];
    titlename.innerHTML = `감정 일기장 - 새 일기`;
  }, []);

  return <DiaryEditor />;
};

export default New;
