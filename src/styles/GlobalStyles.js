import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    color-scheme: ${({ theme }) => theme.mode};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: ${({ theme }) => theme.bodyBackground};
    color: ${({ theme }) => theme.textPrimary};
    -webkit-font-smoothing: antialiased;
    transition: background-color 250ms ease, color 250ms ease;
    cursor: default;
  }

  a {
    color: ${({ theme }) => theme.linkAccent};
    text-decoration: none;
    transition: color 150ms ease;
  }

  a:hover {
    color: ${({ theme }) => theme.linkAccentHover};
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }

  a[href],
  button,
  [role="button"],
  .interactive {
    cursor: pointer;
  }

  input,
  textarea,
  [contenteditable="true"] {
    cursor: text;
  }

  ::selection {
    background: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.buttonPrimaryText};
  }
`;

export default GlobalStyles;
