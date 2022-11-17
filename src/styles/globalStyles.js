import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    };

    body{
        background-color: #222222;
        color: #ffffff;
        padding-top: 60px;
    }

    a{
        text-decoration: none;
        color: #ffffff;
    }
`;
