import { Card, Divider, Grid, Link, Typography } from "@mui/joy";
import { m } from "framer-motion";

export const ProjectsCard = () => {
  return (
    <Card
      component={m.div}
      animate={{ y: [-500, 0], opacity: [0, 1] }}
      transition={{ type: "spring", duration: 1, delay: 0.7 }}
      sx={{ alignItems: "center", width: "100%" }}
    >
      <Typography level="body-lg">Projects</Typography>
      <Divider />
      <Grid container justifyContent="center" rowSpacing={3} height="100%" width="100%">
        <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Link
            href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF"
            component={m.a}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            CommonLibSF
          </Link>
          <Typography level="body-sm" width="67%" textAlign="center">
            A collaborative reverse-engineered library for hacking <Link href="https://bethesda.net/en/game/starfield">Starfield</Link>
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Link href="https://gig.quest" component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            gig.quest
          </Link>
          <Typography level="body-sm" width="67%" textAlign="center">
            A simple web app for finding concerts and other events nearby
          </Typography>
        </Grid>
        <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Link href="https://en.wikipedia.org/wiki/Pintos" component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            PintOS
          </Link>
          <Typography level="body-sm" width="67%" textAlign="center">
            Full implementation of a POSIX-compliant operating system in C{" "}
            <Typography fontSize="0.75rem">(source code provided upon request)</Typography>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
