import { Card, Stack, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import TypeIt from "typeit-react";

export const Education = memo(function Education() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Education</TypeIt>
      </Typography>
      <Card key={mode} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
        <Typography level="title-md">University of California, Los Angeles</Typography>
        <Typography level="title-sm">B.S. Computer Science and Engineering</Typography>
      </Card>
    </Stack>
  );
});

const styles = {
  card: {
    component: m.div,
    drag: true,
    dragSnapToOrigin: true,
    dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
    initial: { opacity: 0 },
    sx: { minHeight: 1 },
    whileDrag: { zIndex: 5 },
    whileInView: { opacity: 1 },
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
} as const;
