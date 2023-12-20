import { Grid, Link, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo, useState } from "react";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
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
import { Flexbox } from "../atoms/Flexbox.tsx";
import { LanguageItem } from "../molecules/LanguageItem.tsx";

const Languages = memo(function Languages() {
  const { mode } = useColorScheme();

  const [expanded, setExpanded] = useState(false);

  return (
    <Stack {...styles.contentItem}>
      <Link onClick={() => setExpanded(!expanded)} {...styles.link}>
        <Flexbox gap={1} justifyContent="start">
          <Typography level="h3">
            <TypeIt options={{ cursor: false }}>Languages</TypeIt>
          </Typography>
          <IconContext.Provider value={{ size: "1.5rem", style: { transform: expanded ? "rotate(90deg)" : undefined, transition: "0.25s" } }}>
            <FiChevronRight />
          </IconContext.Provider>
        </Flexbox>
      </Link>
      <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} key={mode} {...styles.gridContainer}>
        <LanguageItem expanded={expanded} src={cpp} title="C++" />
        <LanguageItem expanded={expanded} src={python} title="Python" />
        <LanguageItem expanded={expanded} src={c} title="C" />
        <LanguageItem expanded={expanded} src={typescript} title="TypeScript" />
        <LanguageItem expanded={expanded} src={java} title="Java" />
        <LanguageItem expanded={expanded} src={csharp} title="C#" />
        <LanguageItem expanded={expanded} src={x64} title="x64 Assembly" />
        <LanguageItem expanded={expanded} src={rust} title="Rust" />
        <LanguageItem expanded={expanded} src={lisp} title="Lisps" />
      </Grid>
      <Typography {...styles.typography}>
        I speak human languages too! I&apos;m fluent in 🇺🇸 English and{" "}
        <Tooltip title="Hindi" {...styles.tooltip}>
          <Typography>🇮🇳 हिन्दी</Typography>
        </Tooltip>
        , no hablo{" "}
        <Tooltip title="Spanish" {...styles.tooltip}>
          <Typography>🇪🇸 Espa&ntilde;ol</Typography>
        </Tooltip>{" "}
        con fluidez pero me defiendo, und zurzeit ich lerne{" "}
        <Tooltip title="German" {...styles.tooltip}>
          <Typography>🇩🇪 Deutsch</Typography>
        </Tooltip>
        .
      </Typography>
    </Stack>
  );
});

export default Languages;

const styles = {
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
  gridContainer: {
    component: m.div,
    container: true,
    initial: { opacity: 0 },
    layout: true,
    spacing: 2,
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
  link: {
    "aria-label": "Expand Languages section",
    color: "neutral",
    underline: "none",
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
  },
  typography: {
    component: m.span,
    initial: { opacity: 0 },
    mt: 1,
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
} as const;
