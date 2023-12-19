import "../css/WritePosting.css";

import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from 'react-router-dom';
import axios from "axios";

const WritePosting = () => {
  const {register, handleSubmit, setValue} = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setValue("userId", sessionStorage.getItem("accessId"));
  }, [setValue]);
  const onSubmit = async (data) => {
    try {
      await axios.post("http://10.10.21.78:8080/community/write", data);
      navigate("/community");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="write-container">
        <form id="contact" onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512">
              <path fill="#12345b" d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"/>
            </svg>
            &nbsp;&nbsp;게시글 작성
          </h3>
          <fieldset>
            <input placeholder="제목을 입력하세요" type="text" tabIndex="1" {...register("title")} required autoFocus></input>
          </fieldset>
          <fieldset>
            <textarea placeholder="내용을 입력하세요" tabIndex="2" {...register("content")} required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">글쓰기</button>
            <NavLink to="/community"><button type="button">취소</button></NavLink>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default WritePosting;