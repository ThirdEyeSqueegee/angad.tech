import { Divider, Grid, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";

import { Flexbox } from "../atoms/Flexbox.tsx";

const intermediate = ["C#", "Rust", "Lisps"];

export const LanguageItem = memo(function LanguageItem(props: { expanded: boolean; src: string; title: string }) {
  const { expanded, src, title } = props;

  const { mode } = useColorScheme();

  return (
    <Grid {...styles.gridItem}>
      <Tooltip title={title} {...styles.tooltip}>
        <m.img src={src} {...styles.img} {...(title === "Rust" && { style: { filter: mode === "dark" ? undefined : "invert(1)" } })} />
      </Tooltip>
      {expanded ?
        <>
          <Divider orientation="vertical" />
          <Flexbox component={m.div} gap={2} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Typography level="body-sm">Proficiency: </Typography>
            <Typography color={intermediate.includes(title) ? "primary" : "success"} level="body-sm">
              {intermediate.includes(title) ? "Intermediate" : "Fluent"}
            </Typography>
          </Flexbox>
        </>
      : null}
    </Grid>
  );
});

const styles = {
  gridItem: {
    alignItems: "center",
    component: m.div,
    display: "flex",
    gap: 3,
    layout: true,
    lg: 1,
    xs: 2,
  },
  img: {
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.9 },
    width: isMobile ? 32 : 40,
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
  },
} as const;
