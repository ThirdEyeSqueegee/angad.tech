import { Stack, Typography } from "@mui/joy";
import { motion } from "motion/react";
import { memo } from "react";
import { isMobile } from "react-device-detect";

import mugshot from "../../assets/mugshot.png";
import { Flexbox } from "../atoms/Flexbox.tsx";
import { ProfileLinks } from "../molecules/ProfileLinks.tsx";

const Intro = memo(function Intro() {
  return (
    <Flexbox {...styles.intro}>
      <Flexbox {...styles.imgBox}>
        <img src={mugshot} {...styles.img} alt="Angad" />
        <motion.div {...styles.imgBorder} />
      </Flexbox>
      <Stack gap={2}>
        <Typography>
          I am a Los Angeles based software engineer specialized in full-stack development. My computer-related interests include system programming,
          machine learning, computability theory, programming language theory, and reverse engineering. My non-computer-related interests include
          physics, history, philosophy of science, music theory (I've been playing guitar since I was 6!), and linguistics.
        </Typography>
        <ProfileLinks />
      </Stack>
    </Flexbox>
  );
});

export default Intro;

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
    component: motion.div,
    display: "grid",
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
      whileDrag: { zIndex: 5 },
    }),
  },
  intro: {
    component: motion.div,
    flexDirection: isMobile ? "column" : "row",
    gap: isMobile ? 3 : 5,
    initial: { opacity: 0 },
    justifyContent: "space-evenly",
    layout: true,
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
} as const;
