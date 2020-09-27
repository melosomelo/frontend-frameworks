/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 8rem;
  & * {
    display: none;
  }

  @media (min-width: 992px) {
    & * {
      display: initial;
    }
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    padding: 4rem 2rem;
  }
`;
