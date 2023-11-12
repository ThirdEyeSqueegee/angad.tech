import "@fontsource/fira-code";
import CssBaseline from "@mui/joy/CssBaseline";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const theme = extendTheme({
  components: {
    JoyTooltip: {
      defaultProps: {
        enterTouchDelay: 50,
        variant: "soft",
        arrow: true,
        followCursor: true,
        placement: "top",
      },
    },
    JoyLink: {
      defaultProps: {
        target: "_blank",
        rel: "noopener noreferrer",
      },
    },
  },
  fontFamily: {
    body: "Fira Code",
    display: "Fira Code",
    code: "Fira Code",
    fallback: "Fira Code",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssVarsProvider defaultMode="dark" theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </React.StrictMode>,
);
