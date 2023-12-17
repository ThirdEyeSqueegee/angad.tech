import { Card, Link, Stack, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { FaLink } from "react-icons/fa6";
import TypeIt from "typeit-react";

export const Projects = memo(function Projects() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Projects</TypeIt>
      </Typography>
      <Stack key={mode} {...styles.stack}>
        <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }}>
          <Link endDecorator={<FaLink />} href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF" level="title-md">
            CommonLibSF
          </Link>
          <Typography>A collaborative reverse-engineered library for hacking Starfield</Typography>
        </Card>
        <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }}>
          <Link endDecorator={<FaLink />} href="https://gig.quest" level="title-md">
            gig.quest
          </Link>
          <Typography>A simple web app for finding concerts and other events nearby</Typography>
        </Card>
        <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }}>
          <Link endDecorator={<FaLink />} href="https://en.wikipedia.org/wiki/Pintos" level="title-md">
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

const styles = {
  card: {
    component: m.div,
    drag: true,
    dragSnapToOrigin: true,
    dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
    initial: { opacity: 0 },
    sx: { minHeight: 1 },
    whileDrag: { zIndex: 5 },
    whileInView: { opacity: 1 },
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
  stack: {
    gap: 2,
  },
} as const;
