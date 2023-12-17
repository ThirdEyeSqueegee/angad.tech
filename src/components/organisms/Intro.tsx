import { Stack, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";

import mugshot from "../../assets/mugshot.png";
import { Flexbox } from "../atoms/Flexbox.tsx";
import { ProfileLinks } from "../molecules/ProfileLinks.tsx";

export const Intro = memo(function Intro() {
  return (
    <Flexbox flexDirection={isMobile ? "column" : "row"} {...styles.intro}>
      <img src={mugshot} {...styles.img} />
      <Stack gap={2}>
        <Typography>
          I am a Los Angeles based software engineer specialized in system programming, data engineering, and full-stack development. My interests
          include machine learning, reverse engineering, game programming, and computability theory.
        </Typography>
        <ProfileLinks />
      </Stack>
    </Flexbox>
  );
});

const styles = {
  img: {
    style: {
      borderRadius: "100%",
      maxHeight: "10rem",
      maxWidth: "10rem",
    },
  },
  intro: {
    component: m.div,
    gap: isMobile ? 3 : 5,
    initial: { opacity: 0 },
    justifyContent: "space-evenly",
    layout: true,
    whileInView: { opacity: 1 },
  },
} as const;
