import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id'); // get 쿼리 스트링 사용
  console.log('id는:', id);

  const mode = searchParams.get('mode');
  console.log('mode는', mode);

  return (
    <div>
      <h2>EDIT</h2>
      <button onClick={() => setSearchParams({ who: 'hwan' })}>
        qs 바꾸기
      </button>

      <button onClick={() => navigate('/home')}> home으로 ㄱㅂㄹㄱ</button>
    </div>
  );
};

export default Edit;
