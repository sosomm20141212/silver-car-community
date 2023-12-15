import "../css/ReadPosting.css";

import React, {useEffect,useState} from "react";
import axios from "axios";

const ReadPosting = ({setMode, postingNumber}) => {
  const [sumData, setSumData] = useState(null);
// setValue("userId", sessionStorage.getItem("accessId"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/community/read/${postingNumber}`);
        setSumData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [postingNumber, sumData]);
  // const onSubmit = async (data) => {
  //   try {
  //     await axios.post("http://localhost:8080/community/read", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      {sumData && (
        <div className="read-container" key={sumData.posting.id}>
          <div className="posting-container">
            <h1>{sumData.posting.account.userId}</h1>
            <h1>{sumData.posting.title}</h1>
            <h1>{sumData.posting.content}</h1>
            <h1>{sumData.posting.registrationDate}</h1>
          </div>
          {sumData.comments.map(comment => (
            <div className="none-posting-container" key={comment.id}>
              <div className="comment-container">
                <h2>{comment.account.userId}</h2>
                <h2>{comment.content}</h2>
                <h2>{comment.registrationDate}</h2>
              </div>
              {sumData.replys.filter((reply) => comment.commentSeq===reply.groupSeq).map(reply => (
                <div className="reply-container" key={reply.id}>
                  <h3>{reply.account.userId}</h3>
                  <h3>{reply.content}</h3>
                  <h3>{reply.registrationDate}</h3>
                </div>
              ))}
              <p>-----------------------------------------------------------------</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReadPosting;