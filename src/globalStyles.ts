import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background-color: #f8f8f8;
        color: #29292e;
    }

    body, input, button, textarea {
        font: 400 16px 'Roboto';
    }

    a, button {
        text-decoration: none;
        cursor: pointer;
    }

`

export default GlobalStyle