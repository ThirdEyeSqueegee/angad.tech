import { Card, Divider, Grid, LinearProgress, Tooltip, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

import c from "../assets/c.svg";
import cpp from "../assets/cpp.svg";
import csharp from "../assets/csharp.svg";
import java from "../assets/java.svg";
import lisp from "../assets/lisp.svg";
import python from "../assets/python.svg";
import rust from "../assets/rust.svg";
import ts from "../assets/typescript.svg";
import x64 from "../assets/x64.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";
import { TooltipIcon } from "../atoms/TooltipIcon";

export const LanguagesCard = memo(function LanguagesCard() {
  return (
    <Card {...styles.card}>
      <Typography level="body-lg">I speak</Typography>
      <Divider />
      <Grid {...styles.gridContainer}>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={c} title="C" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={cpp} title="C++" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={csharp} title="C#" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Intermediate" {...styles.tooltip}>
              <LinearProgress determinate value={75} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={java} title="Java" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={python} title="Python" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={x64} title="x64 assembly" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={ts} title="TypeScript" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={rust} title="Rust" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Intermediate" {...styles.tooltip}>
              <LinearProgress determinate value={75} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon src={lisp} title="Lisp" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Intermediate" {...styles.tooltip}>
              <LinearProgress determinate value={75} />
            </Tooltip>
          </Flexbox>
        </Grid>
      </Grid>
    </Card>
  );
});

const styles = {
  card: {
    animate: { opacity: [0, 1], transition: { delay: 0.5, duration: 1, type: "spring" }, y: [-500, 0] },
    whileHover: { boxShadow: "#555555 0 0 8px", transition: { duration: 0.05 } },
  },
  gridContainer: {
    container: true,
    height: 1,
    justifyContent: "center",
    rowSpacing: 5,
    width: 1,
  },
  gridItem: {
    alignItems: "center",
    display: "flex",
    gap: 1,
    justifyContent: "center",
    xs: 4,
  },
  progressBox: {
    component: m.div,
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
    width: 0.35,
  },
  tooltip: {
    animate: { opacity: [0, 1] },
    component: m.div,
  },
};
