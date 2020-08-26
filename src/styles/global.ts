import { createGlobalStyle } from "styled-components";
import logoGitHub from "../assets/gitHub.svg";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    background: #F0F0F5 url(${logoGitHub}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    max-width: 960px;
    padding: 40px 20px;
  }
`;
