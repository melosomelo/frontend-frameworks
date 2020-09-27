import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/UI/Header/Header";
import Sidedrawer from "../../components/UI/Sidedrawer/Sidedrawer";

import { MenuIcon } from "./styles";

function Layout({ children }) {
  const sidedrawerRef = useRef(null);
  const location = useLocation();

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "All posts";
      case "/about":
        return "About";
      case "/create-post":
        return "Create a post";
      default:
        return "Edit a post";
    }
  };

  const onMenuIconClick = () => {
    // showing the sidedrawer
    sidedrawerRef.current.classList.add("show");
  };

  const closeSidedrawer = () => {
    sidedrawerRef.current.classList.remove("show");
  };

  return (
    <>
      <Header />
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        {getPageTitle(location.pathname)}
      </h1>
      <MenuIcon onClick={onMenuIconClick} />
      <Sidedrawer
        sidedrawerRef={sidedrawerRef}
        closeSidedrawer={closeSidedrawer}
      />
      {children}
    </>
  );
}

export default Layout;
