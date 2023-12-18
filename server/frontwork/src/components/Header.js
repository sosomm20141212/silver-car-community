import React from 'react';
import {NavLink ,useNavigate} from 'react-router-dom';
import axios from "axios";

import '../css/Header.css';

function Header() {
  const userId = window.sessionStorage.getItem('accessId');
  const navigate = useNavigate();

  const logout = async () => {
    try {
      window.sessionStorage.removeItem('accessId');
      window.sessionStorage.removeItem('authority');
      alert("로그아웃 되었습니다");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const withdraw = async () => {
    if(window.confirm("정말로 탈퇴하시겠습니까?")) {
      try {
        await axios.delete(`http://localhost:8080/api/withdraw/${userId}`);
        window.sessionStorage.removeItem('accessId');
        window.sessionStorage.removeItem('authority');
        alert("회원탈퇴가 완료되었습니다. 언제든지 다시 찾아오세요.");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <React.Fragment>
      <div className='header'>
        {!userId && <div className='login'><NavLink to='/login'>로그인</NavLink></div>}
        {userId && (
          <div className='loggined-id'>
            <p>{userId}님 환영합니다.&nbsp;&nbsp;</p>
            <div className='logout'>
              <button onClick={logout}>로그아웃</button>
              <NavLink to='/showReRegister'>정보수정</NavLink>
              <button onClick={withdraw}>회원탈퇴</button>
            </div>
          </div>
        )}
        {!userId && <div className='register'><NavLink to='/showRegister'>회원가입</NavLink></div>}
      </div>
    </React.Fragment>
  );
}

export default Header;