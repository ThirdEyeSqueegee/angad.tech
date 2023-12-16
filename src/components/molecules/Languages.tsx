import { Grid, Tooltip } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";

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
  return (
    <Grid
      alignItems="center"
      component={m.div}
      container
      initial="hidden"
      justifyContent="start"
      minWidth={1}
      spacing={3}
      variants={container}
      whileInView="show"
    >
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="C++" {...styles.tooltip}>
          <m.img src={cpp} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="Python" {...styles.tooltip}>
          <m.img src={python} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="C" {...styles.tooltip}>
          <m.img src={c} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="TypeScript" {...styles.tooltip}>
          <m.img src={typescript} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="Java" {...styles.tooltip}>
          <m.img src={java} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="C#" {...styles.tooltip}>
          <m.img src={csharp} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="x64 Assembly" {...styles.tooltip}>
          <m.img src={x64} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="Rust" {...styles.tooltip}>
          <m.img src={rust} {...styles.img} />
        </Tooltip>
      </Grid>
      <Grid component={m.div} lg={1} variants={item} xs={2}>
        <Tooltip title="Lisps" {...styles.tooltip}>
          <m.img src={lisp} {...styles.img} />
        </Tooltip>
      </Grid>
    </Grid>
  );
});

const styles = {
  img: {
    height: isMobile ? 32 : 40,
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.9 },
  },
  tooltip: {
    animate: { opacity: [0, 1] },
  },
} as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;
