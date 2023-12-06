import { IconButton, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { FiGithub } from "react-icons/fi";
import TypeIt from "typeit-react";

export const Header = memo(function Header(props: { isWidescreen?: boolean }) {
  const { isWidescreen } = props;

  return (
    <>
      <IconButton sx={styles.iconButton}>
        <FiGithub fontSize={isMobile ? "1rem" : "1.5rem"} />
        <Link href="https://github.com/ThirdEyeSqueegee/angad.tech" overlay />
      </IconButton>
      <Typography fontSize={isWidescreen ? "4rem" : "2.5rem"} {...styles.typography}>
        <TypeIt options={{ cursor: false }}>Hello, world!</TypeIt>
      </Typography>
    </>
  );
});

const styles = {
  iconButton: {
    "&:hover, &:active": { backgroundColor: "transparent" },
    position: "absolute",
    right: "0.2rem",
    top: "0.25rem",
  },
  typography: {
    component: m.span,
    sx: { userSelect: "none" },
    whileHover: { rotate: [0, 3, -3, 3, -3, 0], transition: { duration: 0.75 } },
  },
};
