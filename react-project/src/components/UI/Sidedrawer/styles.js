import styled from "styled-components";

import CloseSVG from "../../../assets/images/close-icon.svg";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  padding-top: 10rem;

  border-right: 2px solid rgba(183, 183, 183, 0.5);

  width: 250px;
  height: 100vh;

  background-color: #f5f5f5;

  transform: translateX(-100%);

  transition: all 300ms ease-in;

  &.show {
    transform: translateX(0);
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

export const CloseIcon = styled.img.attrs(() => ({
  src: CloseSVG,
  alt: "Close icon",
}))`
  position: absolute;
  top: 8px;
  right: 8px;

  width: 40px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  & a {
    text-decoration: underline;
    color: #61dafb;

    margin-bottom: 2rem;
  }
`;
