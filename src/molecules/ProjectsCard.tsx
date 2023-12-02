import { Card, Divider, Grid, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const ProjectsCard = memo(function ProjectsCard() {
  return (
    <Card {...styles.card}>
      <Typography level="body-lg">Projects</Typography>
      <Divider />
      <Grid flexDirection="column" {...styles.gridContainer}>
        <Grid flexDirection="column" {...styles.gridItem}>
          <Link href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF" {...styles.link}>
            CommonLibSF
          </Link>
          <Typography level="body-sm" textAlign="center" width="67%">
            A collaborative reverse-engineered library for hacking <Link href="https://bethesda.net/en/game/starfield">Starfield</Link>
          </Typography>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <Link href="https://gig.quest" {...styles.link}>
            gig.quest
          </Link>
          <Typography level="body-sm" textAlign="center" width="67%">
            A simple web app for finding concerts and other events nearby
          </Typography>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <Link href="https://en.wikipedia.org/wiki/Pintos" {...styles.link}>
            PintOS
          </Link>
          <Typography level="body-sm" textAlign="center" width="67%">
            Full implementation of a POSIX-compliant operating system in C{" "}
            <Typography fontSize="0.75rem">(source code provided upon request)</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
});

const styles = {
  card: {
    animate: { opacity: [0, 1], transition: { delay: 0.7, duration: 1, type: "spring" }, y: [-500, 0] },
    whileHover: { boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } },
  },
  gridContainer: {
    container: true,
    height: 1,
    justifyContent: "center",
    rowSpacing: 3,
    width: 1,
  },
  gridItem: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    xs: 12,
  },
  link: {
    component: m.a,
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
};
