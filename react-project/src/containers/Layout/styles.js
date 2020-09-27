import styled from "styled-components";

import MenuSVG from "../../assets/images/menu-icon.svg";

export const MenuIcon = styled.img.attrs(() => ({
  src: MenuSVG,
  alt: "Menu icon",
}))`
  position: fixed;
  top: 2rem;
  left: 1rem;
  z-index: 2;

  @media (min-width: 992px) {
    display: none;
  }
`;
