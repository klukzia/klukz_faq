import { createGlobalStyle, css } from "styled-components";
import globals from "./globals";

const GlobalReset = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    cursor: default;
  }

  ul,
  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a,
  button {
    cursor: pointer;
    color: inherit;
    border: none;
    background: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  button {
    border: 0;
  }

	img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input {
    outline: none;
  }

  span {
    cursor: default;
  }

  details summary::-webkit-details-marker {
    display:none;
  }
`;

const GlobalFonts = css`
  @font-face {
    font-family: "Shrimps";
    src: url("/fonts/shrimps.ttf");
    font-weight: 400;
    font-style: normal;
  }
`;

const GlobalStyles = css`
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${globals.colors.primary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${globals.colors.secondary};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${globals.colors.text_primary};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    scroll-behavior: smooth;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #01010333;
    background: radial-gradient(at left top, #131320, #080813);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: ${globals.fonts.mainFont};
  }

  ${GlobalReset}
`;

export default createGlobalStyle`${GlobalStyles}`;
