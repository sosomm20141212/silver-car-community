// import React from 'react';
// import { NavLink } from 'react-router-dom';

// import '../css/Header.css'
// function Header() {
//   const userId = window.sessionStorage.getItem('accessId');
//   return (
//     <React.Fragment>
//       <div className='header'>
//         {!userId && <div className='login'><NavLink to='/login'>로그인</NavLink></div>}
//         {userId && <div className='logout'><p className='loggined-id'>{userId}님 환영합니다</p><NavLink to='/logout'>로그아웃</NavLink></div>}
//         {!userId && <div className='register'><NavLink to='/showRegister'>회원가입</NavLink></div>}
//       </div>
//     </React.Fragment>
//   );
// }

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

import '../css/Header.css';

function Header() {
  const userId = window.sessionStorage.getItem('accessId');
  return (
    <React.Fragment>
      <div className='header'>
        {!userId && <div className='login'><NavLink to='/login'>로그인</NavLink></div>}
        {userId && (
          <div className='loggined-id'>
            <p>{userId}님 환영합니다.&nbsp;&nbsp;</p>
            <div className='logout'>
            <NavLink to='/logout'>로그아웃</NavLink>
            </div>
          </div>
        )}
        {!userId && <div className='register'><NavLink to='/showRegister'>회원가입</NavLink></div>}
      </div>
    </React.Fragment>
  );
}

export default Header;