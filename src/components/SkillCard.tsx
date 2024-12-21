import { Skill } from "@/types.ts";
import { Box, Card, Grid2 as Grid, Link, Stack, Tooltip, Typography } from "@mui/material";
import { motion } from "motion/react";
import TypeIt from "typeit-react";

export const SkillCard = ({ title, skills, expanded }: { title: string; skills: Skill[]; expanded: boolean }) => (
  <Card component={motion.div} layout variant="outlined" sx={styles.card} whileHover={{ y: -4 }} drag dragSnapToOrigin>
    <Stack component={motion.div} layout spacing={1}>
      <Typography component={motion.span} layout="position" variant="h6">
        <TypeIt options={{ cursor: false, lifeLike: true }}>{title}</TypeIt>
      </Typography>
      <Grid component={motion.div} layout container spacing={2} direction={expanded ? "column" : undefined}>
        {skills.map((skill, i) => (
          <Grid component={motion.div} layout key={i}>
            <Box component={motion.div} layout sx={styles.skillBox}>
              <Tooltip title={expanded ? "" : skill.title}>
                <motion.img layout src={skill.icon} alt={skill.title} width="36" height="36" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
              </Tooltip>
              {expanded && <Link href={skill.url}>{skill.title}</Link>}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  </Card>
);

const styles = {
  card: {
    minWidth: "12rem",
    p: 2,
    borderRadius: "1rem",
    backgroundColor: "#0d1117",
  },
  skillBox: {
    display: "flex",
    gap: 3,
    alignItems: "center",
  },
};
