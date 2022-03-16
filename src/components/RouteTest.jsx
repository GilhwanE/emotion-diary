import React from 'react';
import { Link } from 'react-router-dom';

const RouteTest = (props) => {
  return (
    <div>
      <h2> 공통 </h2>
      <Link to={'Home'}>Home</Link>
      <br />
      <Link to={'New'}>New</Link>
      <br />
      <Link to={'Diary'}>Diary</Link>
      <br />
      <Link to={'Edit'}>Edit</Link>
    </div>
  );
};

export default RouteTest;
