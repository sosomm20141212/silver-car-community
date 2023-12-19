import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "../css/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const { handleSubmit, control, setError, formState } = useForm();
    const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { password, confirmPassword} = data;
    if (password !== confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "비밀번호가 일치하지 않습니다" });
      return;
    }
    try {
      const response = await axios.post("http://10.10.21.78:8080/api/register", data);
      if (response.data === "회원가입 성공. 환영합니다.") {
        alert("회원가입을 환영합니다.");
        alert("로그인 화면으로 이동해주세요");
        navigate("/login");
      }
      else {
        alert("중복된 ID입니다.");
      }
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  };
  const gotoHome = () => {
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h1 className="register-h1">회원가입</h1>

      <label htmlFor="userId" className="register-label">아이디</label>
      <Controller
        name="userId"
        control={control}
        defaultValue=""
        rules={{ required: "아이디를 입력해주세요" }}
        render={({ field }) => <input className="register-input" id="userId" type="text" {...field} />}
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

      <button type="submit" className="register-button">회원가입</button>
      <button className="register-button" onClick={gotoHome}>취소</button>
    </form>
  );
}

export default Register;