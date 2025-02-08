import mugshot from "@/assets/mugshot.webp";
import { AnimatedText } from "@/components/AnimatedText.tsx";
import { IntroButtons } from "@/components/IntroButtons.tsx";
import { Box, Grid2 as Grid, Link, Stack, Tooltip } from "@mui/material";
import { motion } from "motion/react";
import GitHubCalendar from "react-github-calendar";

export const Intro = () => {
  return (
    <Grid component={motion.div} layout container spacing={{ xs: 3, lg: 0 }}>
      <Grid component={motion.div} layout size={{ xs: 12, lg: 3 }} display="flex" justifyContent={{ xs: "center", lg: "start" }}>
        <Box component={motion.div} layout sx={styles.imageBox}>
          <motion.img layout src={mugshot} alt="Photo" style={styles.image} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
          <motion.div
            style={styles.borderBox}
            animate={{ rotate: 360, transition: { duration: 15, ease: "linear", repeat: Infinity } }}
            whileTap={{ rotate: -360, transition: { duration: 10, ease: "linear", repeat: Infinity } }}
          />
        </Box>
      </Grid>
      <Grid component={motion.div} layout size={{ xs: 12, lg: 9 }}>
        <Stack component={motion.div} layout spacing={3} sx={styles.mainStack}>
          <AnimatedText>
            I am a Seattle-based software engineer currently working in the <Link href="https://aws.amazon.com/secrets-manager">Secrets Manager</Link> team at Amazon Web Services.
            My computer-related interests include system programming, machine learning, computability theory, programming language theory, and reverse engineering. My
            non-computer-related interests include physics, history, philosophy of science, music theory (I&#39;ve been playing guitar since I was 6!), and linguistics.
          </AnimatedText>
          <IntroButtons />
          <GitHubCalendar
            username="ThirdEyeSqueegee"
            blockMargin={2}
            blockSize={10}
            fontSize={12}
            renderBlock={(block, activity) => <Tooltip title={`${activity.count} commit${activity.count === 1 ? "" : "s"} on ${activity.date}`}>{block}</Tooltip>}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

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
