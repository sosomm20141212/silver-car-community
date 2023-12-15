import React, {useEffect, useState} from "react";

import BulletinBoard from "./BulletinBoard";
import WritePosting from "./WritePosting";
import ReadPosting from "./ReadPosting";

const PostingPage = () => {
  const [mode, setMode] = useState(-1);

  const changeMode = (newMode) => {
    setMode(newMode);
  };
  let content;
  if (mode === 0) {
    content = <BulletinBoard setMode={changeMode} />;
  } else if (mode === -1) {
    content = <WritePosting setMode={changeMode} />;
  } else {
    content = <ReadPosting setMode={changeMode} postingNumber={mode} />;
  }

  return (
      <div>
        {content}
      </div>
  );
}

export default PostingPage;