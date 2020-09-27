import styled from "styled-components";

import EditSVG from "../../assets/images/edit-icon.svg";
import CloseSVG from "../../assets/images/close-icon.svg";

export const Wrapper = styled.article`
  position: relative;

  padding: 1rem;

  & span {
    font-size: 1.5rem;
    font-weight: 700;

    position: absolute;
    right: 0.5rem;
    bottom: 0;
  }

  & p {
    margin-bottom: 2.5rem;
  }
`;

export const EditIcon = styled.img.attrs(() => ({
  src: EditSVG,
  alt: "Edit icon",
}))`
  cursor: pointer;
`;

export const CloseIcon = styled.img.attrs(() => ({
  src: CloseSVG,
  alt: "Close icon",
}))`
  cursor: pointer;
`;

export const TopWrapper = styled.div`
  & h2 {
    font-size: 2.5rem;
    font-weight: 700;

    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
