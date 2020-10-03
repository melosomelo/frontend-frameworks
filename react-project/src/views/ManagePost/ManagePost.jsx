import React, { useEffect, useState, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Loader from "../../components/UI/Loader/Loader";
import { db } from "../../firebase";

import { Wrapper } from "./styles";

/*
  As we did with the Vue project, we're going to reuse a component for both the
  Add & Edit post view,
  since it's pretty much the same component but with filled input & textarea values */
function ManagePost({ isInCreateMode }) {
  const [loading, setLoading] = useState(true);
  const [postData, setPostData] = useState({
    titleValue: "",
    textValue: "",
  });
  const location = useLocation();
  const history = useHistory();
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    (async () => {
      // if we're in createMode, then we need to fetch the post's data
      if (!isInCreateMode) {
        const postID = location.pathname.split("/")[2];
        const doc = await db.collection("posts").doc(postID).get();
        const docData = doc.data();
        setPostData({
          titleValue: docData.title,
          textValue: docData.text,
        });
      }
      setLoading(false);
    })();
  }, [isInCreateMode, location.pathname]);

  const onButtonClick = async () => {
    // eslint-disable-next-line operator-linebreak
    const inputsAreValid =
      inputRef.current.value.length > 0 && textareaRef.current.value.length > 0;
    if (!inputsAreValid) {
      inputRef.current.classList.add("invalid-input");
      textareaRef.current.classList.add("invalid-input");
      return;
    }

    inputRef.current.classList.remove("invalid-input");
    textareaRef.current.classList.remove("invalid-input");
    // if we're in create mode, then we need to write new data in the database
    if (isInCreateMode) {
      await db.collection("posts").add({
        title: inputRef.current.value,
        text: textareaRef.current.value,
        time: new Date(),
      });
    } else {
      // if we're in edit mode, then we need to update the data
      const postID = location.pathname.split("/")[2];
      await db.collection("posts").doc(postID).update({
        text: textareaRef.current.value,
        title: inputRef.current.value,
      });
    }
    history.push("/");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <input type="text" defaultValue={postData.titleValue} ref={inputRef} />
      <textarea defaultValue={postData.textValue} ref={textareaRef} />
      <button type="button" onClick={onButtonClick}>
        Save
      </button>
    </Wrapper>
  );
}

export default ManagePost;
