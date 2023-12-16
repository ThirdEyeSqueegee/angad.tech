import { Grid, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import TypeIt from "typeit-react";

import c from "../../assets/logos/c.svg";
import cpp from "../../assets/logos/cpp.svg";
import csharp from "../../assets/logos/csharp.svg";
import java from "../../assets/logos/java.svg";
import lisp from "../../assets/logos/lisp.svg";
import python from "../../assets/logos/python.svg";
import rust from "../../assets/logos/rust.svg";
import typescript from "../../assets/logos/typescript.svg";
import x64 from "../../assets/logos/x64.svg";

export const Languages = memo(function Languages() {
  const { mode } = useColorScheme();

  return (
    <Stack {...styles.contentItem}>
      <Typography level="h3">
        <TypeIt options={{ cursor: false }}>Languages</TypeIt>
      </Typography>
      <Grid {...styles.gridContainer}>
        <Grid {...styles.gridItem}>
          <Tooltip title="C++" {...styles.tooltip}>
            <m.img src={cpp} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="Python" {...styles.tooltip}>
            <m.img src={python} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="C" {...styles.tooltip}>
            <m.img src={c} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="TypeScript" {...styles.tooltip}>
            <m.img src={typescript} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="Java" {...styles.tooltip}>
            <m.img src={java} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="C#" {...styles.tooltip}>
            <m.img src={csharp} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="x64 Assembly" {...styles.tooltip}>
            <m.img src={x64} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="Rust" {...styles.tooltip}>
            <m.img src={rust} style={{ filter: mode === "dark" ? undefined : "invert(1)" }} {...styles.img} />
          </Tooltip>
        </Grid>
        <Grid {...styles.gridItem}>
          <Tooltip title="Lisps" {...styles.tooltip}>
            <m.img src={lisp} {...styles.img} />
          </Tooltip>
        </Grid>
      </Grid>
      <Typography level="body-sm">
        I speak human languages too! I&apos;m fluent in 🇺🇸 English and 🇮🇳 Hindi, fairly good at 🇪🇸 Spanish, and currently learning 🇩🇪 German.
      </Typography>
    </Stack>
  );
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;

const styles = {
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
  gridContainer: {
    alignItems: "center",
    component: m.div,
    container: true,
    initial: "hidden",
    justifyContent: "start",
    minWidth: 1,
    spacing: 2,
    variants: container,
    whileInView: "show",
  },
  gridItem: {
    component: m.div,
    lg: 1,
    variants: item,
    xs: 2,
  },
  img: {
    height: isMobile ? 32 : 40,
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.9 },
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
  },
} as const;
