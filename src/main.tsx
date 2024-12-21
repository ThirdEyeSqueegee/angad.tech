import App from "@/App.tsx";
import { theme } from "@/theme.ts";
// @ts-expect-error - ignore
import "@fontsource-variable/fira-code";
// @ts-expect-error - ignore
import "@fontsource-variable/inter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
