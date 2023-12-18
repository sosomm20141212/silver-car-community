  import React from "react";
  import axios from "axios";
  import { useForm } from "react-hook-form";
  import { useNavigate } from "react-router-dom";
  import "../css/Login.css";

  function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    const handleLogin = async (data) => {
      try {
        const response = await axios.post("http://localhost:8080/api/login", data);
    
        if (response.data.success === true) {
          // 로그인 성공
          alert("환영합니다");
          window.sessionStorage.setItem("accessId", response.data.userId);
          window.sessionStorage.setItem("authority", response.data.admin);
          navigate("/");
        } else {
          // 로그인 실패
          alert("아이디 또는 비밀번호를 확인하세요");
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    };
    const gotoHome = () => {
      navigate("/");
    };

    return (
      <div className="login-container">
        <div className="login-form">
          <form onSubmit={handleSubmit(handleLogin)}>
            <h1 className="login-title">로그인</h1>
            <div className="login-input-group">
              <label className="login-label">아이디</label>
              <input className="login-input" type="text" {...register("userId", { required: true })} />
            </div>
            <div className="login-input-group">
              <label className="login-label">비밀번호</label>
              
              <input className="login-input" type="password" {...register("password", { required: true })} />
            </div>
            <div className="checkMember">회원이 아니신가요?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/showRegister" style={{ textDecoration: 'none',fontWeight:'bold', }}>회원가입</a></div>
            <button className="login-button" type="submit">로그인</button>
            <button className="login-button" onClick={gotoHome}>취소</button>
          </form>
        </div>
      </div>
    );
  }

  export default Login;