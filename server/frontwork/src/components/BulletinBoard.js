import "../css/BulletinBoard.css";

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const BulletinBoard = ({setMode}) => {
  const [postingList, setPostingList] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const {register, handleSubmit} = useForm();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/community");
        setPostingList(response.data);
        setOriginalData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllData();
  }, []);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/community", data);
      setPostingList(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const writeModeChange = () => {
    setMode(-1);
  };
  const readModeChange = (postingSeq) => {
    setMode(postingSeq);
  }
  const showAllData = () => {
    setPostingList(originalData);
  };

  return (
    <div>
      <div className="write">
        <button onClick={writeModeChange}>글쓰기</button>
        <button onClick={showAllData}>전체글 보기</button>
      </div>
      <div className="search-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="wrap">
            <select {...register("type")}>
              <option value={"userId"}>작성자</option>
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
              <h1><button onClick={() => readModeChange(post.postingSeq)}>{post.title}</button></h1>
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