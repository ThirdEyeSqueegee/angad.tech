import { Card, Grid, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";

import aws from "../../assets/logos/aws.svg";
import cmake from "../../assets/logos/cmake.svg";
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
import vercel from "../../assets/logos/vercel.svg";
import visualstudio from "../../assets/logos/visualstudio.svg";
import vite from "../../assets/logos/vite.svg";
import vscode from "../../assets/logos/vscode.svg";

export const Skills = memo(function Skills() {
  const { mode } = useColorScheme();

  return (
    <Grid {...styles.gridContainer}>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Frontend</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs>
              <Tooltip title="React" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={react} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="Vite" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={vite} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="MUI" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={mui} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="Vercel" {...styles.tooltip}>
                <m.img
                  height={isMobile ? 24 : 30}
                  src={vercel}
                  style={{ filter: mode === "dark" ? undefined : "invert(1)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Backend</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs={8}>
              <Tooltip title="Node.js" {...styles.tooltip}>
                <m.img
                  height={isMobile ? 20 : 24}
                  src={nodejs}
                  style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title="Spring" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={spring} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Full-stack</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs={8}>
              <Tooltip title="Next.js" {...styles.tooltip}>
                <m.img
                  height={isMobile ? 12 : 18}
                  src={nextjs}
                  style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title=".NET" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={dotnet} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Cloud</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs>
              <Tooltip title="AWS Cloud" {...styles.tooltip}>
                <m.img
                  height={24}
                  src={aws}
                  style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">{isMobile ? "ML" : "Machine learning"}</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs>
              <Tooltip title="Keras" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={keras} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="TensorFlow" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={tensorflow} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="PyTorch" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={pytorch} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Build systems</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs={4}>
              <Tooltip title="CMake" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={cmake} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={8}>
              <Tooltip title="Maven" {...styles.tooltip}>
                <m.img
                  height={isMobile ? 20 : 24}
                  src={maven}
                  style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">Data</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs>
              <Tooltip title="PostgreSQL" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={postgresql} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="Pandas" {...styles.tooltip}>
                <m.img
                  height={isMobile ? 26 : 32}
                  src={pandas}
                  style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                  whileHover={{ scale: 1.15 }}
                />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="NumPy" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={numpy} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid {...styles.gridItem}>
        <Card whileHover={{ backgroundColor: mode === "dark" ? "#111827" : "#e5e7eb" }} {...styles.card}>
          <Typography level="title-md">IDEs</Typography>
          <Grid {...styles.iconGridContainer}>
            <Grid xs>
              <Tooltip title="VS Code" {...styles.tooltip}>
                <m.img height={isMobile ? 24 : 30} src={vscode} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="Visual Studio 2022" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={visualstudio} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="IntelliJ IDEA" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={intellij} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs>
              <Tooltip title="Rider" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={rider} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;

const styles = {
  card: {
    component: m.div,
    sx: { minHeight: "6.5rem", minWidth: 1 },
  },
  gridContainer: {
    component: m.div,
    container: true,
    initial: "hidden",
    minWidth: 1,
    spacing: 2,
    variants: container,
    whileInView: "show",
  },
  gridItem: {
    component: m.div,
    variants: item,
    xl: 3,
    xs: 6,
  },
  iconGridContainer: {
    alignItems: "center",
    container: true,
  },
  tooltip: {
    animate: { opacity: [0, 1] },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
} as const;
