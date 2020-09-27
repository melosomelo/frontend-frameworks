/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.header`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    justify-content: space-between;
    padding: 4rem 2rem;
  }
`;
