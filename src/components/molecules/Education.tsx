import { Card, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const Education = memo(function Education() {
  const { mode } = useColorScheme();

  return (
    <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
      <Typography level="title-md">University of California, Los Angeles</Typography>
      <Typography level="body-sm">B.S. Computer Science and Engineering</Typography>
    </Card>
  );
});

const styles = {
  card: {
    component: m.div,
    initial: { opacity: 0 },
    sx: { minHeight: 1 },
    whileInView: { opacity: 1 },
  },
} as const;
