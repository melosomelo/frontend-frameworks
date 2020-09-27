import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Wrapper, CloseIcon, Nav } from "./styles";

function Sidedrawer({ sidedrawerRef, closeSidedrawer }) {
  const history = useHistory();
  return (
    <Wrapper ref={sidedrawerRef}>
      <CloseIcon onClick={closeSidedrawer} />
      <Nav>
        <Link
          to="/"
          onClick={() => {
            closeSidedrawer();
            history.push("/");
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          onClick={() => {
            closeSidedrawer();
            history.push("/about");
          }}
        >
          About
        </Link>
      </Nav>
      <Link to="/create-post">
        <button
          onClick={() => {
            closeSidedrawer();
            history.push("/create-post");
          }}
          type="button"
          style={{
            position: "absolute",
            bottom: "50px",
            transform: "translateX(-50%)",
            left: "50%",
          }}
        >
          New Post
        </button>
      </Link>
    </Wrapper>
  );
}

export default Sidedrawer;
