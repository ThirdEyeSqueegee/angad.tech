import { Card, Divider, Grid, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const ProjectsCard = memo(function ProjectsCard() {
  return (
    <Card
      animate={{ opacity: [0, 1], transition: { delay: 0.7, duration: 1, type: "spring" }, y: [-500, 0] }}
      component={m.div}
      sx={{ alignItems: "center", width: "100%" }}
      whileHover={{ boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } }}
    >
      <Typography level="body-lg">Projects</Typography>
      <Divider />
      <Grid container height="100%" justifyContent="center" rowSpacing={3} width="100%">
        <Grid alignItems="center" display="flex" flexDirection="column" justifyContent="center" xs={12}>
          <Link
            component={m.a}
            href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CommonLibSF
          </Link>
          <Typography level="body-sm" textAlign="center" width="67%">
            A collaborative reverse-engineered library for hacking <Link href="https://bethesda.net/en/game/starfield">Starfield</Link>
          </Typography>
        </Grid>
        <Grid alignItems="center" display="flex" flexDirection="column" justifyContent="center" xs={12}>
          <Link component={m.a} href="https://gig.quest" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            gig.quest
          </Link>
          <Typography level="body-sm" textAlign="center" width="67%">
            A simple web app for finding concerts and other events nearby
          </Typography>
        </Grid>
        <Grid alignItems="center" display="flex" flexDirection="column" justifyContent="center" xs={12}>
          <Link component={m.a} href="https://en.wikipedia.org/wiki/Pintos" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
