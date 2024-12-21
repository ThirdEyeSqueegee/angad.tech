import mugshot from "@/assets/mugshot.png";
import { IntroButtons } from "@/components/IntroButtons.tsx";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import GitHubCalendar from "react-github-calendar";

export const Intro = () => (
  <Grid component={motion.div} layout container>
    <Grid component={motion.div} layout size={{ xs: 12, lg: 3 }}>
      <Box component={motion.div} layout sx={styles.imageBox}>
        <motion.img layout src={mugshot} alt="Photo" style={styles.image} />
        <motion.div
          style={styles.borderBox}
          animate={{ rotate: 360, transition: { duration: 15, ease: "linear", repeat: Infinity } }}
          whileTap={{ rotate: -360, transition: { duration: 10, ease: "linear", repeat: Infinity } }}
        />
      </Box>
    </Grid>
    <Grid component={motion.div} layout size={{ xs: 12, lg: 9 }}>
      <Stack component={motion.div} layout spacing={3} sx={styles.mainStack}>
        <Typography component={motion.span} layout align="justify">
          I am a Los Angeles based software engineer specialized in full-stack development. My computer-related interests include system programming, machine learning,
          computability theory, programming language theory, and reverse engineering. My non-computer-related interests include physics, history, philosophy of science, music
          theory (I&#39;ve been playing guitar since I was 6!), and linguistics.
        </Typography>
        <IntroButtons />
        <GitHubCalendar username="ThirdEyeSqueegee" blockMargin={2} blockSize={10} fontSize={12} />
      </Stack>
    </Grid>
  </Grid>
);

const styles = {
  imageBox: {
    display: "grid",
    p: 1,
  },
  image: { borderRadius: "50%", maxHeight: "12rem", gridColumn: 1, gridRow: 1 },
  borderBox: {
    borderRadius: "50%",
    gridColumn: 1,
    gridRow: 1,
    maxHeight: "12rem",
    outline: "2px dashed #3c434d",
    outlineOffset: "0.5rem",
    maxWidth: "12rem",
  },
  mainStack: { alignItems: "center" },
};
