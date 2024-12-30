import { Typography } from "@mui/material";
import { motion } from "motion/react";
import { ReactNode } from "react";

export const AnimatedText = ({ children }: { children: ReactNode }) => (
  <Typography component={motion.span} layout align="justify">
    {(children as string).split(" ").map((t, i) => (
      <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 10 }}>
        {t}{" "}
      </motion.span>
    ))}
  </Typography>
);
