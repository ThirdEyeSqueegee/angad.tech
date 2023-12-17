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
      <Flexbox {...styles.imgBox}>
        <img src={mugshot} {...styles.img} />
        <m.div {...styles.imgBorder} />
      </Flexbox>
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
    alt: "Profile picture",
    style: {
      borderRadius: "100%",
      gridColumn: 1,
      gridRow: 1,
      maxHeight: "10rem",
      maxWidth: "10rem",
    },
  },
  imgBorder: {
    animate: { rotate: 360, transition: { duration: 25, ease: "linear", repeat: Infinity } },
    style: {
      borderRadius: "100%",
      gridColumn: 1,
      gridRow: 1,
      height: "10rem",
      outline: "#6b7280 dashed 2px",
      outlineOffset: "0.5rem",
      width: "10rem",
    },
    whileTap: { rotate: -360, transition: { duration: 10, ease: "linear", repeat: Infinity } },
  },
  imgBox: {
    component: m.div,
    display: "grid",
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
      whileDrag: { zIndex: 5 },
    }),
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
