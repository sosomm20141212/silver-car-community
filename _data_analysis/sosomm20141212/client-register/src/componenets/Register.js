import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "./Register.css";

function Register() {
    const { handleSubmit, control, setError, formState } = useForm();

  const onSubmit = async (data) => {
    const { password, confirmPassword} = data;
    if (password !== confirmPassword) {
      setError("confirmPassword", { type: "manual", message: "비밀번호가 일치하지 않습니다" });
      return;
    }
    try {
      const response = await axios.post("http://localhost:8080/api/register", data);
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <h1>회원가입</h1>

      <label htmlFor="userId">아이디</label>
      <Controller
        name="userId"
        control={control}
        defaultValue=""
        rules={{ required: "아이디를 입력해주세요" }}
        render={({ field }) => <input id="userId" type="text" {...field} />}
      />
      {formState.errors.userId && <p>{formState.errors.userId.message}</p>}

      <label htmlFor="password">비밀번호</label>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        rules={{ required: "비밀번호를 입력해주세요" }}
        render={({ field }) => <input id="password" type="password" {...field} />}
      />
      {formState.errors.password && <p>{formState.errors.password.message}</p>}

      <label htmlFor="confirmPassword">비밀번호 확인</label>
      <Controller
        name="confirmPassword"
        control={control}
        defaultValue=""
        rules={{ required: "비밀번호를 다시 한번 입력해주세요" }}
        render={({ field }) => <input id="confirmPassword" type="password" {...field} />}
      />
      {formState.errors.confirmPassword && <p>{formState.errors.confirmPassword.message}</p>}

      <label htmlFor="email">이메일 주소</label>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{ required: "이메일을 입력해주세요" }}
        render={({ field }) => <input id="email" type="email" {...field} />}
      />
      {formState.errors.email && <p>{formState.errors.email.message}</p>}

      <button type="submit">회원가입</button>
    </form>
  );
}

export default Register;
