import styled from "styled-components";

export const Wrapper = styled.main`
  width: 95%;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(295px, 1fr));
    column-gap: 2rem;
  }
`;
