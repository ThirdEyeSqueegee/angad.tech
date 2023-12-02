import { Card, Divider, Grid, Typography } from "@mui/joy";
import { memo } from "react";

import c from "../assets/c.svg";
import cpp from "../assets/cpp.svg";
import csharp from "../assets/csharp.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import ts from "../assets/typescript.svg";
import x64 from "../assets/x64.svg";
import { TooltipIcon } from "../atoms/TooltipIcon";

export const LanguagesCard = memo(function LanguagesCard() {
  return (
    <Card {...styles.card}>
      <Typography level="body-lg">I speak</Typography>
      <Divider />
      <Grid {...styles.gridContainer}>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={c} title="C" />
        </Grid>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={cpp} title="C++" />
        </Grid>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={csharp} title="C#" />
        </Grid>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={java} title="Java" />
        </Grid>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={python} title="Python" />
        </Grid>
        <Grid xs={4} {...styles.gridItem}>
          <TooltipIcon src={x64} title="x64 assembly" />
        </Grid>
        <Grid xs={12} {...styles.gridItem}>
          <TooltipIcon src={ts} title="TypeScript" />
        </Grid>
      </Grid>
    </Card>
  );
});

const styles = {
  card: {
    animate: { opacity: [0, 1], transition: { delay: 0.5, duration: 1, type: "spring" }, y: [-500, 0] },
    whileHover: { boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } },
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
    justifyContent: "center",
  },
};
