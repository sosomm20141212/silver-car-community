import "../css/ReadPosting.css";

import React, {useEffect,useState} from "react";
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from "axios";

const ReadPosting = () => {
  const [sumData, setSumData] = useState(null);
  const {postingSeq} = useParams();
  const {register, handleSubmit, setValue} = useForm();
  const navigate = useNavigate();
  const userId = window.sessionStorage.getItem("accessId");

  useEffect(() => {
    setValue("userId", sessionStorage.getItem("accessId"));
    setValue("postingSeq", postingSeq);
  }, [setValue]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/community/read/${postingSeq}`);
        setSumData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const groupNumbering = (data) => {
    if (userId === null) {
      alert("먼저 로그인을 해주세요");
    }
    else {
      setValue("groupSeq", data);
      scrollToForm();
    }
  }
  const scrollToForm = () => {
    const formElement = document.getElementById("input-text");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const onSubmit = async (data) => {
    if (userId === null) {
      alert("먼저 로그인을 해주세요");
    }
    else {
      try {
        const response = await axios.post("http://localhost:8080/community/commwrite", data);
        setSumData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deletePosting = async (postingNumber) => {
    if(window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        await axios.delete(`http://localhost:8080/community/delete/${postingNumber}`);
        navigate("/community");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const deleteComment = async (postingNumber, commentNumber) => {
    if(window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        const response = await axios.delete(`http://localhost:8080/community/commdelete/${postingNumber}/${commentNumber}`);
        setSumData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      {sumData && (
        <div className="read-container" key={sumData.posting.id}>
          <div className="posting-container">
            <p>{sumData.posting.account.userId}</p><p>{sumData.posting.registrationDate}</p>
            <p>{sumData.posting.title}</p>
            <p>{sumData.posting.content}</p>
          </div>
          <div className="posting-control">
            <button onClick={() => groupNumbering(0)}>댓글쓰기</button>
            <NavLink to="/community"><button type="button">게시글로</button></NavLink>
            {sessionStorage.getItem("accessId")!==null && (sessionStorage.getItem("authority")==="1" || (sessionStorage.getItem("authority")==="0" && sumData.posting.account.userId===sessionStorage.getItem("accessId"))) && (
              <NavLink to={`/community/rewrite/${sumData.posting.postingSeq}`}><button type="button">수정</button></NavLink>
            )
            }
            {sessionStorage.getItem("accessId")!==null && (sessionStorage.getItem("authority")==="1" || (sessionStorage.getItem("authority")==="0" && sumData.posting.account.userId===sessionStorage.getItem("accessId"))) && (
              <button className="delete-posting" onClick={() => deletePosting(sumData.posting.postingSeq)}>삭제</button>
            )
            }
          </div>
          <form className="comment-form" onSubmit={handleSubmit(onSubmit)}>
            <textarea id="input-text" rows='1' {...register("content")} placeholder='올바른 댓글 문화, 여러분과 함께 시작합니다!' required></textarea>
            <input type="hidden" {...register("groupSeq", {value: 0})}></input>
            <button type="submit">제출</button>
          </form>
          {sumData.comments.map(comment => (
            <div className="none-posting-container" key={comment.id}>
              <div className="comment-container">
                <h3>{comment.account.userId}</h3>
                {comment.account.userId === userId && (
                  <h3>작성자</h3>
                )}
                <h3>{comment.content}</h3>
                <h3>{comment.registrationDate}</h3>
                <button className="comm-btn" onClick={() => groupNumbering(comment.commentSeq)}>댓글쓰기</button>
                {sessionStorage.getItem("accessId")!==null && (sessionStorage.getItem("authority")==="1" || (sessionStorage.getItem("authority")==="0" && sumData.posting.account.userId===sessionStorage.getItem("accessId"))) && (
                  <button className="comm-btn" onClick={() => deleteComment(postingSeq, comment.commentSeq)}>댓글삭제</button>
                )
                }
              </div>
              {sumData.replys.filter((reply) => comment.commentSeq===reply.groupSeq).map(reply => (
                <div className="reply-container" key={reply.id}>
                  <h4>{reply.account.userId}</h4>
                  {reply.account.userId === userId && (
                    <h4>작성자</h4>
                  )}
                  <h4>{reply.content}</h4>
                  <h4>{reply.registrationDate}</h4>
                  {sessionStorage.getItem("accessId")!==null && (sessionStorage.getItem("authority")==="1" || (sessionStorage.getItem("authority")==="0" && sumData.posting.account.userId===sessionStorage.getItem("accessId"))) && (
                    <button className="comm-btn" onClick={() => deleteComment(postingSeq, reply.commentSeq)}>댓글삭제</button>
                  )
                  }
                </div>
              ))}
              <hr></hr>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReadPosting;