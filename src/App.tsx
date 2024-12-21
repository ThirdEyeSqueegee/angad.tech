import { Education } from "@/features/Education.tsx";
import { Experience } from "@/features/Experience.tsx";
import { Intro } from "@/features/Intro.tsx";
import { Languages } from "@/features/Languages.tsx";
import { Projects } from "@/features/Projects.tsx";
import { Skills } from "@/features/Skills.tsx";
import { AppBar, Container, Grid2 as Grid, Stack, Toolbar, Typography } from "@mui/material";
import { LayoutGroup, motion } from "motion/react";
import TypeIt from "typeit-react";

function App() {
  return (
    <>
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Typography variant="h4" fontFamily="Fira Code Variable" fontWeight={500}>
            <TypeIt options={{ cursor: false, lifeLike: true }}>Angad Misra</TypeIt>
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container component={motion.div} layoutRoot initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <LayoutGroup>
          <Stack component={motion.div} layout spacing={3} sx={styles.mainStack}>
            <Intro />
            <Stack component={motion.div} layout spacing={3} width={1}>
              <Languages />
              <Skills />
              <Grid component={motion.div} layout container spacing={2}>
                <Grid component={motion.div} layout size={{ xs: 12, lg: 6 }}>
                  <Experience />
                </Grid>
                <Grid component={motion.div} layout size={{ xs: 12, lg: 6 }}>
                  <Education />
                </Grid>
              </Grid>
              <Projects />
            </Stack>
          </Stack>
        </LayoutGroup>
      </Container>
    </>
  );
}

export default App;

const styles = {
  appBar: {
    borderBottom: "1px solid #3c434d",
    backgroundColor: "transparent",
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 1, 2, 0.75)",
    backdropFilter: "blur(0.5rem)",
  },
  mainStack: {
    py: 4,
    alignItems: "center",
  },
};
