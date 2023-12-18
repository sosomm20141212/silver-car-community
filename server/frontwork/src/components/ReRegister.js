import "../css/Register.css";

import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const { handleSubmit, control, setError, formState, setValue } = useForm();
  const navigate = useNavigate();
  const userId = window.sessionStorage.getItem("accessId");

  const onSubmit = async (data) => {
    const { password, confirmPassword} = data;
    if (password !== confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "비밀번호가 일치하지 않습니다" });
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/register", data);
      alert("회원정보가 성공적으로 수정되었습니다.");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/reregister/${userId}`);
        setValue("userId", response.data.userId);
        setValue("email", response.data.email);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAccount();
  }, [userId]);

  const gotoHome = () => {
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h1 className="register-h1">회원정보수정</h1>

      <label htmlFor="userId" className="register-label">아이디</label>
      <Controller
        name="userId"
        control={control}
        defaultValue=""
        rules={{ required: "아이디를 입력해주세요" }}
        render={({ field }) => <input className="register-input" id="userId" type="text" readOnly {...field} />}
      />
      {formState.errors.userId && <p>{formState.errors.userId.message}</p>}

      <label htmlFor="password" className="register-label">비밀번호</label>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "비밀번호를 입력해주세요" }}
        render={({ field }) => <input className="register-input" id="password" type="password" {...field} />}
      />
      {formState.errors.password && <p>{formState.errors.password.message}</p>}

      <label htmlFor="confirmPassword" className="register-label">비밀번호 확인</label>
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{ required: "비밀번호를 다시 한번 입력해주세요" }}
        render={({ field }) => <input className="register-input" id="confirmPassword" type="password" {...field} />}
      />
      {formState.errors.confirmPassword && <p>{formState.errors.confirmPassword.message}</p>}

      <label htmlFor="email" className="register-label">이메일 주소</label>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "이메일을 입력해주세요" }}
        render={({ field }) => <input className="register-input" id="email" type="email" {...field} />}
      />
      {formState.errors.email && <p>{formState.errors.email.message}</p>}

      <button type="submit" className="register-button">수정</button>
      <button className="register-button" onClick={gotoHome}>취소</button>
    </form>
  );
}

export default Register;