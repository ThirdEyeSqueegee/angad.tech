import { Divider, Grid, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";

import { LanguageProficiency } from "./LanguageProficiency.tsx";

export const LanguageItem = memo(function LanguageItem(props: { expanded: boolean; src: string; title: string }) {
  const { expanded, src, title } = props;

  const { mode } = useColorScheme();

  return (
    <Grid lg={expanded ? undefined : 1} xs={expanded ? undefined : 2} {...styles.gridItem}>
      <Tooltip title={title} {...styles.tooltip}>
        <m.img alt={title} src={src} {...styles.img} {...(title === "Rust" && { style: { filter: mode === "dark" ? undefined : "invert(1)" } })} />
      </Tooltip>
      {expanded ?
        <>
          <Divider orientation="vertical" />
          <Stack alignItems="start">
            <Typography fontFamily="Fira Code Variable">
              <TypeIt options={{ cursor: false }}>{title}</TypeIt>
            </Typography>
            <LanguageProficiency language={title} />
          </Stack>
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
    gap: isMobile ? 2 : 3,
    layout: true,
  },
  img: {
    initial: { scale: 0 },
    whileHover: { scale: 1.15 },
    whileInView: { rotate: 360, scale: 1, transition: { duration: 0.75, type: "spring" } },
    whileTap: { scale: 0.9 },
    width: isMobile ? 32 : 40,
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
    layout: true,
  },
} as const;
