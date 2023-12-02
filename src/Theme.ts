import { extendTheme } from "@mui/joy";
import { m } from "framer-motion";

export const theme = extendTheme({
  components: {
    JoyCard: {
      defaultProps: {
        component: m.div,
        sx: {
          alignItems: "center",
          height: 1,
          justifyContent: "center",
          width: 1,
        },
      },
    },
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
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.25)",
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
