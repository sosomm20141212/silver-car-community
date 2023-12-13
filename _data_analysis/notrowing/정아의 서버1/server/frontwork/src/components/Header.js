import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css'
function Header() {
  return (
    <React.Fragment>
      <div className='header'>
        <div className='login'><NavLink to='/login'>로그인</NavLink></div>
        <div className='logout'><NavLink to='/logout'>로그아웃</NavLink></div>
        <div className='register'><NavLink to='/register'>회원가입</NavLink></div>
      </div>
    </React.Fragment>
  );
}

export default Header;