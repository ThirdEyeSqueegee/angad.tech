import { Card, Divider, Grid, LinearProgress, Tooltip, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

import aws from "../assets/aws.svg";
import cmake from "../assets/cmake.svg";
import dotnet from "../assets/dotnet.svg";
import node from "../assets/node.svg";
import pandas from "../assets/pandas.svg";
import postgres from "../assets/postgres.svg";
import pytorch from "../assets/pytorch.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";
import { TooltipIcon } from "../atoms/TooltipIcon";

export const ToolsCard = memo(function ToolsCard() {
  return (
    <Card {...styles.card}>
      <Typography level="body-lg">Tools/frameworks I know</Typography>
      <Divider />
      <Grid {...styles.gridContainer}>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://cmake.org" src={cmake} title="CMake" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://react.dev" src={react} title="React" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://www.postgresql.org" src={postgres} title="PostgreSQL" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://aws.amazon.com" src={aws} title="AWS Cloud Suite" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://pandas.pydata.org" src={pandas} title="Pandas" width={72} />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://nodejs.org" src={node} title="Node.js" width={72} />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://pytorch.org" src={pytorch} title="PyTorch" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Intermediate" {...styles.tooltip}>
              <LinearProgress determinate value={75} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://spring.io" src={spring} title="Spring" />
          <Flexbox {...styles.progressBox}>
            <Tooltip title="Fluent" {...styles.tooltip}>
              <LinearProgress color="success" determinate value={100} />
            </Tooltip>
          </Flexbox>
        </Grid>
        <Grid flexDirection="column" {...styles.gridItem}>
          <TooltipIcon href="https://dotnet.microsoft.com" src={dotnet} title=".NET" />
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
    animate: { opacity: [0, 1], transition: { delay: 0.6, duration: 1, type: "spring" }, y: [-500, 0] },
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
