import { Link, Switch, Tooltip, Typography, switchClasses, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo, useState } from "react";
import { isMobile } from "react-device-detect";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import TypeIt from "typeit-react";

import heptagram from "../../assets/heptagram.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";

const Header = memo(function Header() {
  const { mode, setMode } = useColorScheme();

  const [scrollUp, setScrollUp] = useState(false);

  return (
    <Flexbox sx={{ backdropFilter: "blur(0.5rem)", backgroundColor: mode === "dark" ? "rgba(3, 7, 18, 0.5)" : "transparent" }} {...styles.flex}>
      <Link aria-label="Scroll up">
        <m.img
          alt="Scroll up"
          animate={{ rotate: mode === "dark" ? -360 : 360, transition: { duration: 1 } }}
          height={48}
          key={`${mode} ${scrollUp}`}
          onClick={() => {
            setScrollUp(!scrollUp);
            window.scrollTo({ behavior: "smooth", top: 0 });
          }}
          src={heptagram}
          style={{ filter: mode === "dark" ? "invert(1)" : undefined }}
        />
      </Link>
      <Typography level="h1">
        <TypeIt options={{ cursor: false }}>Angad Misra</TypeIt>
      </Typography>
      <Tooltip title={`Switch to ${mode === "dark" ? "light" : "dark"} mode`} {...styles.tooltip}>
        <Switch
          checked={mode !== "dark"}
          color={mode === "dark" ? "primary" : "warning"}
          onChange={() => setMode(mode === "dark" ? "light" : "dark")}
          slotProps={{ thumb: { children: mode === "dark" ? <MdDarkMode /> : <MdLightMode /> } }}
          {...styles.switch}
        />
      </Tooltip>
    </Flexbox>
  );
});

export default Header;

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
    sx: {
      [`& .${switchClasses.thumb}`]: { transition: "0.25s" },
      position: "absolute",
      right: "1rem",
    },
    variant: "soft",
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
  },
} as const;
