import React from "react";
import { Link } from "react-router-dom";

import monthsMapping from "../../util/monthsMapping";

// eslint-disable-next-line object-curly-newline
import { Wrapper, CloseIcon, EditIcon, TopWrapper } from "./styles";

// eslint-disable-next-line object-curly-newline
function Post({ title, text, date, id, onDeletePost }) {
  return (
    <Wrapper data-id={id}>
      <TopWrapper>
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CloseIcon
            onClick={() => onDeletePost(id)}
            style={{
              width: "30px",
              marginRight: "8px",
            }}
          />
          <Link to={`/edit-post/${id}`}>
            <EditIcon />
          </Link>
        </div>
      </TopWrapper>
      <p>{text}</p>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <span>
        {`${
          monthsMapping[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear()}`}
      </span>
    </Wrapper>
  );
}

export default Post;
