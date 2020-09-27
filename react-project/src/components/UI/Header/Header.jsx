import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./styles";

import HomeIcon from "../../../assets/images/home-icon.svg";

function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <img src={HomeIcon} alt="Home icon" />
      </Link>
      <div
        style={{
          display: "flex",
          width: "340px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/create-post">
          <button type="button">New Post</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Header;
