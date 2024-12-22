import { Card, Grid2 as Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import TypeIt from "typeit-react";

export const Projects = () => {
  return (
    <Stack component={motion.div} layout spacing={1} width={1}>
      <Typography component={motion.span} layout variant="h5" fontWeight={600}>
        <TypeIt options={{ cursor: false, lifeLike: true }}>Projects</TypeIt>
      </Typography>
      <Grid component={motion.div} layout container initial="hidden" whileInView="visible" variants={list} spacing={2}>
        {projects.map(({ title, url, description }, i) => (
          <Grid component={motion.div} layout variants={item} key={i} size={{ xs: 12, lg: 4 }}>
            <Card component={motion.div} layout variant="outlined" sx={styles.projectCard} whileHover={{ y: -4 }} drag dragSnapToOrigin>
              <Stack component={motion.div} layout spacing={1}>
                <Typography variant="h6">
                  <Link href={url}>{title}</Link>
                </Typography>
                <Typography>{description}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const projects = [
  {
    title: "CommonLibSF",
    url: "https://github.com/Starfield-Reverse-Engineering/CommonLibSF",
    description: "A reverse-engineered library for hacking Starfield",
  },
  {
    title: "gig.quest",
    url: "https://gig.quest",
    description: "A simple web app for finding concerts and other events nearby",
  },
  {
    title: "PintOS",
    url: "https://en.wikipedia.org/wiki/Pintos",
    description: "Full implementation of a POSIX-compliant operating system (UC Berkeley CS 162)",
  },
];

const styles = {
  projectCard: {
    minWidth: "12rem",
    p: 2,
    borderRadius: "1rem",
    backgroundColor: "#0d1117",
  },
};
