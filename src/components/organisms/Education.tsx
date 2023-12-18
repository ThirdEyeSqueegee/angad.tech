import { Card, Stack, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";

import ucla from "../../assets/logos/ucla.svg";

export const Education = memo(function Education() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Education</TypeIt>
      </Typography>
      <Card key={mode} {...styles.card}>
        <Typography {...styles.ucla}>University of California, Los Angeles</Typography>
        <Typography level="title-sm">B.S. Computer Science and Engineering</Typography>
      </Card>
    </Stack>
  );
});

const styles = {
  card: {
    component: m.div,
    initial: { opacity: 0 },
    layout: true,
    sx: { backdropFilter: "blur(0.5rem)", backgroundColor: "transparent", minHeight: 1, minWidth: 1 },
    whileHover: { borderColor: "#172554" },
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
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
  ucla: {
    level: "title-md",
    startDecorator: <img alt="UCLA" height={32} src={ucla} style={{ alignSelf: "start" }} />,
  },
} as const;
