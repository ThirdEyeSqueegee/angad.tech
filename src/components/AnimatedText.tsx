import { Typography } from "@mui/material";
import { motion } from "motion/react";
import { Children, isValidElement, ReactNode } from "react";

export const AnimatedText = ({ children }: { children: ReactNode }) => (
  <Typography component={motion.span} layout align="justify">
    {Children.map(children, (child) => {
      if (isValidElement(child)) {
        return child;
      }
      if (typeof child === "string") {
        return child.split(" ").map((t, i) => (
          <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: i / 10 }}>
            {t}{" "}
          </motion.span>
        ));
      }
      return child;
    })}
  </Typography>
);
