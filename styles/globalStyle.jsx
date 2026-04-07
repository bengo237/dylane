import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, :root {
    font-family: 'Inter', 'JetBrains Mono', sans-serif;
    min-height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: ${(props) => props.theme.colors.backgroundPage};
  }

  body {
    background-image: radial-gradient(
      ${(props) => props.theme.name === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.06)"} 1px,
      transparent 1px
    );
    background-size: 28px 28px;
  }

  ::selection {
    background: ${(props) => props.theme.colors.branding};
    color: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${(props) => props.theme.colors.branding};
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  code, .mono {
    font-family: 'JetBrains Mono', monospace;
  }
`;
export default GlobalStyle;
