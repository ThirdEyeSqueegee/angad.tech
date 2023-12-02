import { GitHub } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { m } from "framer-motion";
import { memo } from "react";
import TypeIt from "typeit-react";

export const Header = memo(function Header() {
  const { height, width } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <>
      <IconButton sx={styles.iconButton}>
        <GitHub />
        <Link href="https://github.com/ThirdEyeSqueegee/angad.tech" overlay />
      </IconButton>
      <Typography fontSize={isWidescreen ? "4rem" : "2.75rem"} {...styles.typography}>
        <TypeIt options={{ cursor: false }}>Hello, world!</TypeIt>
      </Typography>
    </>
  );
});

const styles = {
  iconButton: {
    "&:hover": { backgroundColor: "transparent" },
    position: "absolute",
    right: "0.5rem",
    top: "0.5rem",
  },
  typography: {
    component: m.span,
    sx: { userSelect: "none" },
    whileHover: { rotate: [0, 3, -3, 3, -3, 0], transition: { duration: 0.75 } },
  },
};
