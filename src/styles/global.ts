import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('/assets/fonts/Inter/Inter-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SVN-BebasNeuePro';
    src: url('/assets/fonts/SVN-BebasNeuePro/SVN-BebasNeuePro.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --size-hd: 9.6rem;
    --pd-sc: 8rem;
    --radius: 2.4rem;
    --rds-item: 1.6rem;
    --container: 120rem;
    --color-text: #15191E;
    --color-pri: #4379F2;
    --color-second: #6EC207;
    --color-third: #094795;
    --color-red: #ED1C24;
    --cl-bd: rgba(0, 0, 0, 0.1);
    --cl-light: #65758B;
    --sdow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    --sdow2: 0px 4px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 1200px) {
      --pd-sc: 4rem;
      --radius: 1.6rem;
      --size-hd: 6rem;
    }

    @media (max-width: 800px) {
      --pd-sc: 4rem;
      --rds-item: 0.8rem;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    @media screen and (min-width: 2000px) {
      font-size: 80%;
    }
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    color: #00215E;
    background-color: ${theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;

    @media screen and (min-width: 2000px) {
      font-size: 2rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    outline: none;
    padding: 0;
  }

  input,
  textarea {
    appearance: none;
    outline: none;
    font-family: ${theme.typography.fontFamily.primary};
    font-size: 1.6rem;
  }
`;
