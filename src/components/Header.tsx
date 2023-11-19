import { GitHub } from "@mui/icons-material";
import { IconButton, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import TypeIt from "typeit-react";

export const Header = (props: { isWidescreen: boolean }) => {
  return (
    <>
      <IconButton sx={{ position: "absolute", top: "0.5rem", right: "0.5rem", "&:hover": { backgroundColor: "transparent" } }}>
        <GitHub />
        <Link href="https://github.com/ThirdEyeSqueegee/angad.tech" overlay />
      </IconButton>
      <Typography
        fontSize={props.isWidescreen ? "4rem" : "2.75rem"}
        component={m.span}
        whileHover={{ rotate: [0, 3, -3, 3, -3, 0], transition: { duration: 0.75 } }}
        sx={{ userSelect: "none" }}
      >
        <TypeIt>Hello, world!</TypeIt>
      </Typography>
    </>
  );
};
