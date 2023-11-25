import { extendTheme } from "@mui/joy";

export const theme = extendTheme({
  components: {
    JoyLink: {
      defaultProps: {
        rel: "noopener noreferrer",
        target: "_blank",
      },
    },
    JoyTooltip: {
      defaultProps: {
        arrow: true,
        enterTouchDelay: 50,
        followCursor: true,
        placement: "top",
        sx: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        variant: "soft",
      },
    },
  },
  fontFamily: {
    body: "Fira Code Variable",
    code: "Fira Code Variable",
    display: "Fira Code Variable",
    fallback: "Fira Code Variable",
  },
});
