import { Card, Link, Stack, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { FaLink } from "react-icons/fa6";

export const Projects = memo(function Projects() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.stack}>
      <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }}>
        <Link endDecorator={<FaLink />} href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF" level="title-md">
          CommonLibSF
        </Link>
        <Typography>A collaborative reverse-engineered library for hacking Starfield</Typography>
      </Card>
      <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }}>
        <Link endDecorator={<FaLink />} href="https://gig.quest" level="title-md">
          gig.quest
        </Link>
        <Typography>A simple web app for finding concerts and other events nearby</Typography>
      </Card>
      <Card {...styles.card} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }}>
        <Link endDecorator={<FaLink />} href="https://en.wikipedia.org/wiki/Pintos" level="title-md">
          PintOS
        </Link>
        <Typography>
          Full implementation of a POSIX-compliant operating system featuring userspace program support, thread scheduling, and a BFFS filesystem
        </Typography>
      </Card>
    </Stack>
  );
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;

const styles = {
  card: {
    component: m.div,
    sx: { minHeight: 1 },
    variants: item,
  },
  stack: {
    component: m.div,
    gap: 2,
    initial: "hidden",
    variants: container,
    whileInView: "show",
  },
} as const;
