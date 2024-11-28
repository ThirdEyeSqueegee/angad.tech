import { Card, Link, Stack, Typography, useColorScheme } from "@mui/joy";
import { motion } from "motion/react";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { FaLink } from "react-icons/fa6";
import TypeIt from "typeit-react";

const Projects = memo(function Projects() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Projects</TypeIt>
      </Typography>
      <Stack key={mode} {...styles.stack}>
        <Card {...styles.card}>
          <Link
            aria-label="Project: CommonLibSF"
            endDecorator={<FaLink />}
            href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF"
            level="title-md"
          >
            CommonLibSF
          </Link>
          <Typography>A collaborative reverse-engineered library for hacking Starfield</Typography>
        </Card>
        <Card {...styles.card}>
          <Link aria-label="Project: gig.quest" endDecorator={<FaLink />} href="https://gig.quest" level="title-md">
            gig.quest
          </Link>
          <Typography>A simple web app for finding concerts and other events nearby</Typography>
        </Card>
        <Card {...styles.card}>
          <Link aria-label="Project: PintOS" endDecorator={<FaLink />} href="https://en.wikipedia.org/wiki/Pintos" level="title-md">
            PintOS
          </Link>
          <Typography>
            Full implementation of a POSIX-compliant operating system featuring userspace program support, thread scheduling, and a BFFS filesystem
          </Typography>
        </Card>
      </Stack>
    </Stack>
  );
});

export default Projects;

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
  stack: {
    gap: 2,
  },
} as const;
