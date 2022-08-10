import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #121214;
    color: #e1e1e6;
    font: 400 1.6rem 'Plus Jakarta Sans', sans-serif;
  }

`
