import React from "react";
import {Routes, Route} from 'react-router-dom';
import BulletinBoard from "./BulletinBoard";
import WritePosting from "./WritePosting";
import ReWritePosting from "./ReWritePosting";
import ReadPosting from "./ReadPosting";

const PostingPage = () => {
  return (
      <Routes>
        <Route path="/*" element={<BulletinBoard></BulletinBoard>}></Route>
        <Route path="write" element={<WritePosting></WritePosting>}></Route>
        <Route path="rewrite/:postingSeq" element={<ReWritePosting></ReWritePosting>}></Route>
        <Route path="read/:postingSeq" element={<ReadPosting></ReadPosting>}></Route>
      </Routes>
  );
}

export default PostingPage;