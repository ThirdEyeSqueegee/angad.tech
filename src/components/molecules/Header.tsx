import { Switch, Tooltip, Typography, switchClasses, useColorScheme } from "@mui/joy";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import TypeIt from "typeit-react";

import heptagram from "../../assets/heptagram.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";

export const Header = memo(function Header() {
  const { mode, setMode } = useColorScheme();

  return (
    <Flexbox sx={{ backdropFilter: "blur(0.5rem)", backgroundColor: mode === "dark" ? "rgba(3, 7, 18, 0.5)" : "transparent" }} {...styles.flex}>
      <img height={48} src={heptagram} style={{ filter: mode === "dark" ? "invert(1)" : undefined }} />
      <Typography level="h1">
        <TypeIt options={{ cursor: false }}>Angad Misra</TypeIt>
      </Typography>
      <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`}>
        <Switch
          checked={mode !== "dark"}
          color={mode === "dark" ? "primary" : "warning"}
          onChange={() => setMode(mode === "dark" ? "light" : "dark")}
          slotProps={{
            thumb: {
              children: mode === "dark" ? <MdDarkMode /> : <MdLightMode />,
            },
          }}
          sx={{
            [`& .${switchClasses.thumb}`]: {
              transition: "0.25s",
            },
            position: "absolute",
            right: "1rem",
          }}
          {...styles.switch}
        />
      </Tooltip>
    </Flexbox>
  );
});

const styles = {
  flex: {
    gap: 1,
    minWidth: 1,
    position: "sticky",
    py: 1,
    top: 0,
    zIndex: 5,
  },
  switch: {
    size: isMobile ? "sm" : "lg",
    variant: "soft",
  },
} as const;
