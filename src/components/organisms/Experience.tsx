import { Card, Stack, Typography, useColorScheme } from "@mui/joy";
import { motion } from "motion/react";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";

const Experience = memo(function Experience() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Experience</TypeIt>
      </Typography>
      <Card key={mode} {...styles.card}>
        <Typography level="title-md">
          BuildingEase, Inc.
          <Typography level="body-sm" ml={1}>
            (2024 &ndash; Present)
          </Typography>
        </Typography>
        <Typography level="title-sm">Software Developer (Full-Stack)</Typography>
        <Typography>
          Developing a first-of-its-kind web platform using PostgreSQL, Spring, and MUI to facilitate coordination of architects, contractors, spec
          writers, etc. in medium-to-large scale construction projects, as well as providing a one-stop solution for all the sustainability and human
          health requirements for such projects.
        </Typography>
      </Card>
    </Stack>
  );
});

export default Experience;

const styles = {
  card: {
    component: motion.div,
    initial: { opacity: 0 },
    layout: true,
    sx: { backdropFilter: "blur(0.5rem)", backgroundColor: "transparent", minHeight: 1, minWidth: 1 },
    whileHover: { borderColor: "#172554", y: -4 },
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
      whileDrag: { zIndex: 5 },
    }),
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
} as const;
