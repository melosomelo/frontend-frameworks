import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 92%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  position: relative;

  & input,
  & textarea {
    width: 100%;
    margin-bottom: 4rem;
  }

  & button {
    align-self: flex-end;
    width: 170px;
  }
`;
