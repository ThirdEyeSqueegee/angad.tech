import { Card, Divider, Grid, Typography } from "@mui/joy";
import { m } from "framer-motion";

import c from "../assets/c.svg";
import cpp from "../assets/cpp.svg";
import csharp from "../assets/csharp.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import ts from "../assets/typescript.svg";
import x64 from "../assets/x64.svg";
import { TooltipIcon } from "./TooltipIcon";

export const LanguagesCard = () => {
  return (
    <Card
      animate={{ opacity: [0, 1], transition: { delay: 0.5, duration: 1, type: "spring" }, y: [-500, 0] }}
      component={m.div}
      sx={{ alignItems: "center", width: "100%" }}
      whileHover={{ boxShadow: "#555555 0 0 10px", transition: { duration: 0.25 } }}
    >
      <Typography level="body-lg">I speak</Typography>
      <Divider />
      <Grid container height="100%" justifyContent="center" rowSpacing={5} width="100%">
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={c} title="C" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={cpp} title="C++" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={csharp} title="C#" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={java} title="Java" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={python} title="Python" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={4}>
          <TooltipIcon src={x64} title="x64 assembly" />
        </Grid>
        <Grid alignItems="center" display="flex" justifyContent="center" xs={12}>
          <TooltipIcon src={ts} title="TypeScript" />
        </Grid>
      </Grid>
    </Card>
  );
};
