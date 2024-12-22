import ucla from "@/assets/logos/ucla.svg";
import { Grid2 as Grid, Link, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import TypeIt from "typeit-react";

export const Education = () => (
  <Stack component={motion.div} layout spacing={1} width={1}>
    <Typography component={motion.span} layout variant="h5" fontWeight={600}>
      <TypeIt options={{ cursor: false, lifeLike: true }}>Education</TypeIt>
    </Typography>
    <Grid component={motion.div} layout container spacing={2}>
      <Grid component={motion.div} layout size="auto">
        <Link href="https://www.ucla.edu">
          <motion.img layout src={ucla} alt="UCLA" width={128} />
        </Link>
      </Grid>
      <Grid component={motion.div} layout size="auto">
        <Stack>
          <Typography component={motion.span} layout>
            B.S. Computer Science and Engineering
          </Typography>
          <Typography component={motion.span} layout variant="caption" color="textSecondary">
            2023
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  </Stack>
);
