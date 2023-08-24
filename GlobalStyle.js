import { createGlobalStyle } from 'styled-components';
import { media } from './Mixin';
import './Font.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    ${media.mobile} {
      font-size: 85%;
    }
  }

  input {
    border: none;
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;

    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .App {
    background-color: var(--bg);
  }

  main {
    position: relative;
    padding-top: 150px;
    color: var(--font);
    background-color: var(--bg);
    z-index: 1;
  }
`;

export default GlobalStyle;
