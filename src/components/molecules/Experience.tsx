import { Card, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const Experience = memo(function Experience() {
  return (
    <Card
      component={m.div}
      sx={{ minHeight: 1 }}
      whileHover={{ backgroundColor: "#111827" }}
      whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
    >
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
