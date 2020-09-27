import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset styles */

  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito";
  }

  html {
    font-size: 62.5%;
  }


  /* Actual styles */

  body{
    background-color: #f5f5f5;
    font-family: "Nunito";
    color: #1b1c1e;
  }

  button {
    border: none;

    font-size: 2rem;
    font-weight: 600;
    color: white;

    padding: 1.5rem 3.5rem;

    border-radius: 10px;

    background-color: #61dafb;

    cursor: pointer;

  }

  a {
    font-size: 2rem;
    color: #1b1c1e;

    text-decoration: none;
  }

  a:hover{
    color: #61dafb;
  }

  h1{
    font-size: 4.8rem;
    font-weight: 300;
  }

  p {
    font-size: 2rem;
  }

  span {
    color: #61dafb;
  }

  span.vue {
    color: #4fc08d;
  }

  input {
    border: none;
    border-bottom: 2px solid #b7b7b7;

    background-color: transparent;

    font-size: 2.5rem;
    
    padding: 1rem;
  }

  textarea{
    resize: none;

    border: 2px solid #b7b7b7;
    border-radius: 10px;

    font-size: 2rem;

    padding: 1.5rem;

    background-color: transparent;

    min-height: 400px;
  }

  input:focus{
    border-bottom: 2px solid #61dafb;
  }

  textarea:focus{
    border: 2px solid #61dafb;

  }

  textarea:focus,
  input:focus{
    outline: none;
    transition: border 300ms ease-in;
  }



`;

export default GlobalStyle;
