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
      component={m.div}
      animate={{ y: [-500, 0], opacity: [0, 1] }}
      transition={{ type: "spring", duration: 1, delay: 0.5 }}
      sx={{ alignItems: "center", width: "100%" }}
    >
      <Typography level="body-lg">I speak</Typography>
      <Divider />
      <Grid container justifyContent="center" rowSpacing={5} height="100%" width="100%">
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={c} title="C" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={cpp} title="C++" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={csharp} title="C#" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={java} title="Java" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={python} title="Python" />
        </Grid>
        <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={x64} title="x64 assembly" />
        </Grid>
        <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
          <TooltipIcon src={ts} title="TypeScript" />
        </Grid>
      </Grid>
    </Card>
  );
};
