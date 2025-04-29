import { createGlobalStyle } from "styled-components";
import 'normalize.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    color: ${({ theme }) => theme.navText};
    text-decoration: none;
  }
`;