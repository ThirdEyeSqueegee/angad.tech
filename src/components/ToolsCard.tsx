import { Card, Divider, Grid, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

import aws from "../assets/aws.svg";
import cmake from "../assets/cmake.svg";
import ida from "../assets/ida.svg";
import node from "../assets/node.svg";
import pandas from "../assets/pandas.svg";
import postgres from "../assets/postgres.svg";
import pytorch from "../assets/pytorch.svg";
import react from "../assets/react.svg";
import spring from "../assets/spring.svg";
import { TooltipIcon } from "./TooltipIcon";

export const ToolsCard = memo(function ToolsCard() {
  return (
    <Card
      animate={{ opacity: [0, 1], transition: { delay: 0.6, duration: 1, type: "spring" }, y: [-500, 0] }}
      component={m.div}
      sx={{ alignItems: "center", width: "100%" }}
      whileHover={{ boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } }}
    >
      <Typography level="body-lg">Tools/frameworks I know</Typography>
      <Divider />
      <Grid container height="100%" justifyContent="center" rowSpacing={5} width="100%">
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://cmake.org" src={cmake} title="CMake" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://react.dev" src={react} title="React" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://www.postgresql.org" src={postgres} title="PostgreSQL" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://aws.amazon.com" src={aws} title="AWS Cloud Suite" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://pandas.pydata.org" src={pandas} title="Pandas" width="75px" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://nodejs.org" src={node} title="Node.js" width="75px" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://pytorch.org" src={pytorch} title="PyTorch" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://spring.io" src={spring} title="Spring" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon href="https://hex-rays.com/ida-pro" src={ida} title="IDA Pro" />
        </Grid>
      </Grid>
    </Card>
  );
});
