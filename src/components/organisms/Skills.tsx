import { Card, Grid, IconButton, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo, useState } from "react";
import { isMobile } from "react-device-detect";
import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import TypeIt from "typeit-react";

import aws from "../../assets/logos/aws.svg";
import cmake from "../../assets/logos/cmake.svg";
import docker from "../../assets/logos/docker.svg";
import dotnet from "../../assets/logos/dotnet.svg";
import intellij from "../../assets/logos/intellij.svg";
import keras from "../../assets/logos/keras.svg";
import maven from "../../assets/logos/maven.svg";
import mui from "../../assets/logos/mui.svg";
import nextjs from "../../assets/logos/nextjs.svg";
import nodejs from "../../assets/logos/nodejs.svg";
import numpy from "../../assets/logos/numpy.svg";
import pandas from "../../assets/logos/pandas.svg";
import postgresql from "../../assets/logos/postgresql.svg";
import pytorch from "../../assets/logos/pytorch.svg";
import react from "../../assets/logos/react.svg";
import rider from "../../assets/logos/rider.svg";
import spring from "../../assets/logos/spring.svg";
import tensorflow from "../../assets/logos/tensorflow.svg";
import terraform from "../../assets/logos/terraform.svg";
import vercel from "../../assets/logos/vercel.svg";
import visualstudio from "../../assets/logos/visualstudio.svg";
import vite from "../../assets/logos/vite.svg";
import vscode from "../../assets/logos/vscode.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";

export const Skills = memo(function Skills() {
  const { mode } = useColorScheme();

  const [expanded, setExpanded] = useState(false);

  return (
    <Stack {...styles.contentItem}>
      <Flexbox justifyContent="start">
        <Typography level="h3">
          <TypeIt options={{ cursor: false }}>Skills</TypeIt>
        </Typography>
        <IconButton onClick={() => setExpanded(!expanded)} size="sm" sx={{ "&:hover,&:active": { backgroundColor: "transparent" } }}>
          <IconContext.Provider value={{ size: "1.5rem", style: { transform: expanded ? "rotate(90deg)" : undefined, transition: "0.25s" } }}>
            <FiChevronRight />
          </IconContext.Provider>
        </IconButton>
      </Flexbox>
      <Grid key={mode} {...styles.gridContainer}>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Frontend</Typography>
            <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} {...styles.iconGridContainer}>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="React" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={react} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Vite" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vite} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="MUI" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={mui} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem} {...styles.iconGridItem}>
                <Tooltip title="Vercel" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vercel} style={{ filter: mode === "dark" ? undefined : "invert(1)" }} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Backend</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 0.5 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs={8} {...styles.iconGridItem}>
                <Tooltip title="Node.js" {...styles.tooltip}>
                  <m.img
                    height={isMobile ? 22 : 26}
                    src={nodejs}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
              </Grid>
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title="Spring" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={spring} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Full-stack</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 1.25 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs={8} {...styles.iconGridItem}>
                <Tooltip title="Next.js" {...styles.tooltip}>
                  <m.img height={isMobile ? 12 : 18} src={nextjs} style={{ filter: mode === "dark" ? undefined : "invert(1)" }} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title=".NET" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={dotnet} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Cloud</Typography>
            <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} {...styles.iconGridContainer}>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="AWS Cloud" {...styles.tooltip}>
                  <m.img
                    height={isMobile ? 26 : 32}
                    src={aws}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Terraform" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={terraform} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Docker" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={docker} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>{isMobile ? "ML" : "Machine learning"}</Typography>
            <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} {...styles.iconGridContainer}>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Keras" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={keras} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="TensorFlow" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={tensorflow} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="PyTorch" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={pytorch} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Build systems</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 1 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title="CMake" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={cmake} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs={8} {...styles.iconGridItem}>
                <Tooltip title="Maven" {...styles.tooltip}>
                  <m.img
                    height={isMobile ? 20 : 24}
                    src={maven}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Data</Typography>
            <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} {...styles.iconGridContainer}>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="PostgreSQL" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={postgresql} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Pandas" {...styles.tooltip}>
                  <m.img
                    height={isMobile ? 26 : 32}
                    src={pandas}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="NumPy" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={numpy} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>IDEs</Typography>
            <Grid alignItems={expanded ? "start" : "center"} direction={expanded ? "column" : "row"} {...styles.iconGridContainer}>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="VS Code" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vscode} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Visual Studio 2022" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={visualstudio} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="IntelliJ IDEA" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={intellij} {...styles.img} />
                </Tooltip>
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Rider" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={rider} {...styles.img} />
                </Tooltip>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0, y: -64 },
  show: { opacity: 1, transition: { duration: 0.25 }, y: 0 },
} as const;

const styles = {
  card: {
    component: m.div,
    layout: true,
    sx: { minHeight: 1, minWidth: 1 },
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 100 },
      whileDrag: { zIndex: 5 },
    }),
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
  gridContainer: {
    component: m.div,
    container: true,
    initial: "hidden",
    layout: true,
    minWidth: 1,
    spacing: 2,
    variants: container,
    whileInView: "show",
  },
  gridItem: {
    component: m.div,
    layout: true,
    variants: item,
    xl: 3,
    xs: 6,
  },
  iconGridContainer: {
    component: m.div,
    container: true,
    layout: true,
  },
  iconGridItem: {
    component: m.div,
    layout: true,
  },
  img: {
    layout: true,
    whileHover: { scale: 1.15 },
    whileTap: { scale: 0.9 },
  },
  tooltip: {
    animate: { opacity: 1 },
    component: m.div,
    initial: { opacity: 0 },
    layout: true,
  },
  typography: {
    component: m.span,
    layout: true,
    level: "title-md",
  },
} as const;
