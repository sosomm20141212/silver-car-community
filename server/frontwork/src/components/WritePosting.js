import "../css/WritePosting.css";

import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const WritePosting = ({setMode}) => {
  const {register, handleSubmit, setValue} = useForm();

  useEffect(() => {
    setValue("userId", sessionStorage.getItem("accessId"));
  }, [setValue]);
  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8080/community/write", data);
      setMode(0);
    } catch (error) {
      console.log(error);
    }
  };
  const boardModeChange = () => {
    setMode(0);
  };

  return (
    <div>
      <div className="write-container">
        <form id="contact" onSubmit={handleSubmit(onSubmit)}>
          <h3>글쓰기</h3>
          <fieldset>
            <input placeholder="제목을 입력하세요" type="text" tabIndex="1" {...register("title")} required autoFocus></input>
          </fieldset>
          <fieldset>
            <textarea placeholder="내용을 입력하세요" tabIndex="2" {...register("content")} required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">글쓰기</button>
            <button type="button" onClick={boardModeChange}>취소</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default WritePosting;