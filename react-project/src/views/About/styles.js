import styled from "styled-components";

export const Wrapper = styled.main`
  width: 95%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DevOpinion = styled.div`
  & h2 {
    font-size: 2.5rem;
    font-weight: 700;

    margin-bottom: 2rem;
  }

  & p {
    margin-bottom: 1rem;
  }

  margin-bottom: 4rem;

  text-align: center;
`;
