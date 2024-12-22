import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#010409",
      default: "#010409",
    },
    text: {
      primary: "#f0f6fc",
    },
  },
  typography: {
    fontFamily: "Inter Variable",
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        placement: "top",
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(0.5rem)",
          border: "1px solid #3c434d",
        },
        arrow: {
          color: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(0.5rem)",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        rel: "noopener",
        target: "_blank",
        underline: "hover",
      },
    },
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});
