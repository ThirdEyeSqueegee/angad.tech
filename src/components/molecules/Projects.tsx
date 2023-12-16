import { Card, Link, Stack, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { FaLink } from "react-icons/fa6";

export const Projects = memo(function Projects() {
  return (
    <Stack gap={2}>
      <Card
        component={m.div}
        sx={{ height: 1, maxWidth: "25rem" }}
        whileHover={{ backgroundColor: "#111827" }}
        whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
      >
        <Link endDecorator={<FaLink />} href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF" level="title-md">
          CommonLibSF
        </Link>
        <Typography>A collaborative reverse-engineered library for hacking Starfield</Typography>
      </Card>
      <Card
        component={m.div}
        sx={{ height: 1, maxWidth: "25rem" }}
        whileHover={{ backgroundColor: "#111827" }}
        whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
      >
        <Link endDecorator={<FaLink />} href="https://gig.quest" level="title-md">
          gig.quest
        </Link>
        <Typography>A simple web app for finding concerts and other events nearby</Typography>
      </Card>
      <Card
        component={m.div}
        sx={{ height: 1, maxWidth: "25rem" }}
        whileHover={{ backgroundColor: "#111827" }}
        whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
      >
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
