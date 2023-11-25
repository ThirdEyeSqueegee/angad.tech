import { GitHub } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import TypeIt from "typeit-react";

export const Header = (props: { isWidescreen: boolean }) => {
  const { isWidescreen } = props;

  return (
    <>
      <IconButton sx={{ "&:hover": { backgroundColor: "transparent" }, position: "absolute", right: "0.5rem", top: "0.5rem" }}>
        <GitHub />
        <Link href="https://github.com/ThirdEyeSqueegee/angad.tech" overlay />
      </IconButton>
      <Typography
        component={m.span}
        fontSize={isWidescreen ? "4rem" : "2.75rem"}
        sx={{ userSelect: "none" }}
        whileHover={{ rotate: [0, 3, -3, 3, -3, 0], transition: { duration: 0.75 } }}
      >
        <TypeIt>Hello, world!</TypeIt>
      </Typography>
    </>
  );
};
