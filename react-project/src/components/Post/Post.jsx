import React from "react";

import monthsMapping from "../../util/monthsMapping";

// eslint-disable-next-line object-curly-newline
import { Wrapper, CloseIcon, EditIcon, TopWrapper } from "./styles";

function Post({ title, text, date }) {
  return (
    <Wrapper>
      <TopWrapper>
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CloseIcon
            style={{
              width: "30px",
              marginRight: "8px",
            }}
          />
          <EditIcon />
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
