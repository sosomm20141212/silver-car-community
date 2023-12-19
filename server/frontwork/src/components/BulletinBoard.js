import "../css/BulletinBoard.css";

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import axios from "axios";

const BulletinBoard = () => {
  const [postingList, setPostingList] = useState([]);
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("http://10.10.21.78:8080/community");
        setPostingList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, []);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://10.10.21.78:8080/community", data);
      setPostingList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const writeModeChange = () => {
    if (sessionStorage.getItem("accessId") === null) {
      alert("먼저 로그인을 해주세요");
    }
    else {
      navigate("write");
    }
  };
  const fetchAllData = async () => {
    try {
      const response = await axios.get("http://10.10.21.78:8080/community");
      setPostingList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="write">
        <button onClick={writeModeChange}>글쓰기</button>
        <button onClick={fetchAllData}>전체글 보기</button>
      </div>
      <div className="search-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrap">
            <select {...register("type")}>
              <option value={"userId"} >작성자</option>
              <option value={"title"} >제목</option>
              <option value={"content"} >내용</option>
            </select>
            <div className="search">
              <input type="text" className="searchTerm" placeholder="검색어를 입력하세요" {...register("text", {required: true})}></input>
              <button type="submit" className="searchButton">검색</button>
            </div>
          </div>
        </form>
      </div>
      {postingList.map((post) => (
        <div key={post.id} className="blog-container">
          <div className="blog-body">
            <div className="blog-title">
              <h1>{post.postingSeq}</h1>
              <h1><NavLink to={`/community/read/${post.postingSeq}`}><button>{post.title}</button></NavLink></h1>
              <h1>{post.account.userId}</h1>
            </div>
          </div>
          <div className="blog-footer">
            <ul>
              <li className="published-date">{post.registrationDate}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BulletinBoard;