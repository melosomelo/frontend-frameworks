import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset styles */

  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }


  /* Actual styles */

  body{
    background-color: #f5f5f5;
    font-family: "Nunito";
  }

`;

export default GlobalStyle;
