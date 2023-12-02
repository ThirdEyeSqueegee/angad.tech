import { Card, Divider, Grid, Typography } from "@mui/joy";
import { memo } from "react";

import aws from "../assets/aws.svg";
import cmake from "../assets/cmake.svg";
import ida from "../assets/ida.png";
import node from "../assets/node.svg";
import pandas from "../assets/pandas.svg";
import postgres from "../assets/postgres.svg";
import pytorch from "../assets/pytorch.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import { TooltipIcon } from "../atoms/TooltipIcon";

export const ToolsCard = memo(function ToolsCard() {
  return (
    <Card {...styles.card}>
      <Typography level="body-lg">Tools/frameworks I know</Typography>
      <Divider />
      <Grid {...styles.gridContainer}>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://cmake.org" src={cmake} title="CMake" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://react.dev" src={react} title="React" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://www.postgresql.org" src={postgres} title="PostgreSQL" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://aws.amazon.com" src={aws} title="AWS Cloud Suite" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://pandas.pydata.org" src={pandas} title="Pandas" width={75} />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://nodejs.org" src={node} title="Node.js" width={75} />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://pytorch.org" src={pytorch} title="PyTorch" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://spring.io" src={spring} title="Spring" />
        </Grid>
        <Grid {...styles.gridItem}>
          <TooltipIcon href="https://hex-rays.com/ida-pro" src={ida} title="IDA Pro" />
        </Grid>
      </Grid>
    </Card>
  );
});

const styles = {
  card: {
    animate: { opacity: [0, 1], transition: { delay: 0.6, duration: 1, type: "spring" }, y: [-500, 0] },
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
    xs: 4,
  },
};
