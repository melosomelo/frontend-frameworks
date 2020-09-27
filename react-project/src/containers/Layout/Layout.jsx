import React, { useRef } from "react";

import Header from "../../components/UI/Header/Header";
import Sidedrawer from "../../components/UI/Sidedrawer/Sidedrawer";

import { MenuIcon } from "./styles";

function Layout() {
  const sidedrawerRef = useRef(null);

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
        }}
      >
        Page title
      </h1>
      <MenuIcon onClick={onMenuIconClick} />
      <Sidedrawer
        sidedrawerRef={sidedrawerRef}
        closeSidedrawer={closeSidedrawer}
      />
    </>
  );
}

export default Layout;
