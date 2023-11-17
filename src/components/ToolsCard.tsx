import { Card, Divider, Grid, Typography } from "@mui/joy";
import { m } from "framer-motion";
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

export const ToolsCard = () => {
  return (
    <Card
      component={m.div}
      animate={{ y: [-500, 0], opacity: [0, 1] }}
      transition={{ type: "spring", duration: 1, delay: 0.6 }}
      sx={{ alignItems: "center", width: "100%" }}
    >
      <Typography level="body-lg">Tools/frameworks I know</Typography>
      <Divider />
      <Grid container justifyContent="center" rowSpacing={5} height="100%" width="100%">
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={cmake} title="CMake" href="https://cmake.org" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={react} title="React" href="https://react.dev" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={postgres} title="PostgreSQL" href="https://www.postgresql.org" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={aws} title="AWS Cloud Suite" href="https://aws.amazon.com" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={pandas} title="Pandas" width="75px" href="https://pandas.pydata.org" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={node} title="Node.js" width="75px" href="https://nodejs.org" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={pytorch} title="PyTorch" href="https://pytorch.org" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={spring} title="Spring" href="https://spring.io" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={ida} title="IDA Pro" href="https://hex-rays.com/ida-pro" />
        </Grid>
      </Grid>
    </Card>
  );
};
