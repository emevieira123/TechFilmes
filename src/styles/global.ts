import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #111111;
    color: #FAFAFA;

  }

  body * {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
  }
`;
