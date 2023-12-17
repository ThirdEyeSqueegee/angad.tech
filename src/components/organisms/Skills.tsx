import { Card, Grid, Link, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo, useState } from "react";
import { isMobile } from "react-device-detect";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa6";
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
      <Link color="neutral" onClick={() => setExpanded(!expanded)} underline="none">
        <Flexbox gap={1} justifyContent="start">
          <Typography level="h3">
            <TypeIt options={{ cursor: false }}>Skills</TypeIt>
          </Typography>
          <IconContext.Provider value={{ size: "1.5rem", style: { transform: expanded ? "rotate(90deg)" : undefined, transition: "0.25s" } }}>
            <FiChevronRight />
          </IconContext.Provider>
        </Flexbox>
      </Link>
      <Grid key={mode} {...styles.gridContainer}>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Frontend</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="React" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={react} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://react.dev/">
                    React
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Vite" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vite} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://vitejs.dev/">
                    Vite
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="MUI" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={mui} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://mui.com/">
                    MUI
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem} {...styles.iconGridItem}>
                <Tooltip title="Vercel" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vercel} style={{ filter: mode === "dark" ? undefined : "invert(1)" }} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://vercel.com/">
                    Vercel
                  </Link>
                : null}
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
              rowGap={expanded ? 2.5 : undefined}
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
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://nodejs.org">
                    Node.js
                  </Link>
                : null}
              </Grid>
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title="Spring" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={spring} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://spring.io/">
                    Spring
                  </Link>
                : null}
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
              rowGap={expanded ? 2.5 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs={8} {...styles.iconGridItem}>
                <Tooltip title="Next.js" {...styles.tooltip}>
                  <m.img height={isMobile ? 12 : 18} src={nextjs} style={{ filter: mode === "dark" ? undefined : "invert(1)" }} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://nextjs.org/">
                    Next.js
                  </Link>
                : null}
              </Grid>
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title=".NET" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={dotnet} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://dotnet.microsoft.com">
                    .NET
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Cloud</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="AWS Cloud" {...styles.tooltip}>
                  <m.img
                    height={isMobile ? 26 : 32}
                    src={aws}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://aws.amazon.com/">
                    AWS Cloud
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Terraform" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={terraform} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.terraform.io/">
                    Terraform
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Docker" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={docker} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.docker.com/">
                    Docker
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>{isMobile ? "ML" : "Machine learning"}</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Keras" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={keras} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://keras.io/">
                    Keras
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="TensorFlow" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={tensorflow} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.tensorflow.org/">
                    TensorFlow
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="PyTorch" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={pytorch} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://pytorch.org/">
                    PyTorch
                  </Link>
                : null}
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
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs={4} {...styles.iconGridItem}>
                <Tooltip title="CMake" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={cmake} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://cmake.org/">
                    CMake
                  </Link>
                : null}
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
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://maven.apache.org/">
                    Maven
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>Data</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="PostgreSQL" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={postgresql} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.postgresql.org/">
                    PostgreSQL
                  </Link>
                : null}
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
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://pandas.pydata.org/">
                    Pandas
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="NumPy" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={numpy} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://numpy.org/">
                    NumPy
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#f3f4f6", borderColor: "#172554" }} {...styles.card}>
            <Typography {...styles.typography}>IDEs</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Visual Studio Code" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={vscode} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://code.visualstudio.com/">
                    VS Code
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Visual Studio 2022" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={visualstudio} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://visualstudio.microsoft.com/">
                    VS 2022
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="IntelliJ IDEA" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={intellij} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.jetbrains.com/idea">
                    IntelliJ IDEA
                  </Link>
                : null}
              </Grid>
              <Grid xs {...styles.iconGridItem}>
                <Tooltip title="Rider" {...styles.tooltip}>
                  <m.img height={isMobile ? 26 : 32} src={rider} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link endDecorator={<FaLink />} href="https://www.jetbrains.com/rider">
                    Rider
                  </Link>
                : null}
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
    alignItems: "center",
    component: m.div,
    display: "flex",
    gap: 2,
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
