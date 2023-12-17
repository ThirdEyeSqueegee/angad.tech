import { Card, Stack, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";

export const Experience = memo(function Experience() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Experience</TypeIt>
      </Typography>
      <Card key={mode} whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
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
    </Stack>
  );
});

const styles = {
  card: {
    component: m.div,
    initial: { opacity: 0 },
    layout: true,
    sx: { minHeight: 1 },
    whileInView: { opacity: 1 },
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
      whileDrag: { zIndex: 5 },
    }),
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
} as const;
