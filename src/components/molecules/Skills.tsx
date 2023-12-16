import { Card, Grid, Tooltip, Typography } from "@mui/joy";
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
  return (
    <Grid component={m.div} container initial="hidden" minWidth={1} spacing={2} variants={container} whileInView="show">
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Frontend</Typography>
          <Grid alignItems="center" container>
            <Grid xs={3}>
              <Tooltip title="React" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={react} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
              <Tooltip title="Vite" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={vite} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
              <Tooltip title="MUI" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={mui} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
              <Tooltip title="Vercel" {...styles.tooltip}>
                <m.img height={isMobile ? 24 : 30} src={vercel} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Backend</Typography>
          <Grid alignItems="center" container>
            <Grid xs={8}>
              <Tooltip title="Node.js" {...styles.tooltip}>
                <m.img height={isMobile ? 20 : 24} src={nodejs} whileHover={{ scale: 1.15 }} />
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
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Full-stack</Typography>
          <Grid alignItems="center" container>
            <Grid xs={8}>
              <Tooltip title="Next.js" {...styles.tooltip}>
                <m.img height={isMobile ? 12 : 18} src={nextjs} whileHover={{ scale: 1.15 }} />
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
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Cloud</Typography>
          <Grid alignItems="center" container>
            <Grid xs={12}>
              <Tooltip title="AWS Cloud" {...styles.tooltip}>
                <m.img height={24} src={aws} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">{isMobile ? "ML" : "Machine learning"}</Typography>
          <Grid alignItems="center" container>
            <Grid xs={4}>
              <Tooltip title="Keras" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={keras} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title="TensorFlow" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={tensorflow} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title="PyTorch" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={pytorch} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Build systems</Typography>
          <Grid alignItems="center" container>
            <Grid xs={4}>
              <Tooltip title="CMake" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={cmake} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={8}>
              <Tooltip title="Maven" {...styles.tooltip}>
                <m.img height={isMobile ? 20 : 24} src={maven} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">Data</Typography>
          <Grid alignItems="center" container>
            <Grid xs={4}>
              <Tooltip title="PostgreSQL" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={postgresql} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title="Pandas" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={pandas} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={4}>
              <Tooltip title="NumPy" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={numpy} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid component={m.div} variants={item} xl={3} xs={6}>
        <Card component={m.div} sx={{ minHeight: "6.5rem", minWidth: 1 }} whileHover={{ backgroundColor: "#111827" }}>
          <Typography level="title-md">IDEs</Typography>
          <Grid alignItems="center" container>
            <Grid xs={3}>
              <Tooltip title="VS Code" {...styles.tooltip}>
                <m.img height={isMobile ? 24 : 30} src={vscode} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
              <Tooltip title="Visual Studio 2022" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={visualstudio} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
              <Tooltip title="IntelliJ IDEA" {...styles.tooltip}>
                <m.img height={isMobile ? 26 : 32} src={intellij} whileHover={{ scale: 1.15 }} />
              </Tooltip>
            </Grid>
            <Grid xs={3}>
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

const styles = {
  tooltip: {
    animate: { opacity: [0, 1] },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
} as const;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
} as const;

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;
