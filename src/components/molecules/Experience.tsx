import { Card, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const Experience = memo(function Experience() {
  const { mode } = useColorScheme();

  return (
    <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
      <Typography level="title-md">
        BuildingEase
        <Typography level="body-sm" ml={1}>
          (2021 &ndash; Present)
        </Typography>
      </Typography>
      <Typography>
        Developing a first-of-its-kind full-stack web platform using PostgreSQL, Spring, and MUI to facilitate coordination of architects,
        contractors, spec writers, etc. in medium-to-large scale construction projects, as well as providing a one-stop solution for all the
        sustainability and human health requirements for such projects.
      </Typography>
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
