import { Typography } from "@mui/joy";
import { memo } from "react";
import TypeIt from "typeit-react";

import heptagram from "../../assets/heptagram.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";

export const Header = memo(function Header() {
  return (
    <Flexbox
      gap={1}
      minWidth={1}
      position="sticky"
      py={1}
      sx={{ backdropFilter: "blur(0.5rem)", backgroundColor: "rgba(3, 7, 18, 0.5)" }}
      top={0}
      zIndex={5}
    >
      <img height={48} src={heptagram} style={{ filter: "invert(100%)" }} />
      <Typography alignSelf="center" level="h1">
        <TypeIt options={{ cursor: false }}>Angad Misra</TypeIt>
      </Typography>
    </Flexbox>
  );
});
