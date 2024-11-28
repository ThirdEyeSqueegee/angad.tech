import { Card, Grid, Link, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { motion } from "motion/react";
import { memo, useState } from "react";
import { isMobile } from "react-device-detect";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import TypeIt from "typeit-react";

import aws from "../../assets/logos/aws.svg";
import cargo from "../../assets/logos/cargo.png";
import clang from "../../assets/logos/clang.png";
import cmake from "../../assets/logos/cmake.svg";
import docker from "../../assets/logos/docker.svg";
import ida from "../../assets/logos/ida.png";
import maven from "../../assets/logos/maven.svg";
import msvc from "../../assets/logos/msvc.svg";
import mui from "../../assets/logos/mui.svg";
import nodejs from "../../assets/logos/nodejs.svg";
import numpy from "../../assets/logos/numpy.svg";
import pandas from "../../assets/logos/pandas.svg";
import polars from "../../assets/logos/polars.svg";
import postgresql from "../../assets/logos/postgresql.svg";
import react from "../../assets/logos/react.svg";
import spring from "../../assets/logos/spring.svg";
import terraform from "../../assets/logos/terraform.svg";
import vite from "../../assets/logos/vite.svg";
import { Flexbox } from "../atoms/Flexbox.tsx";

const Skills = memo(function Skills() {
  const { mode } = useColorScheme();

  const [expanded, setExpanded] = useState(false);

  return (
    <Stack {...styles.contentItem}>
      <Link aria-label="Expand Skills section" color="neutral" onClick={() => setExpanded(!expanded)} underline="none">
        <Flexbox gap={1} justifyContent="start">
          <Typography level="h3">
            <TypeIt options={{ cursor: false }}>Skills</TypeIt>
          </Typography>
          <IconContext.Provider
            value={{
              size: "1.5rem",
              style: { transform: expanded ? "rotate(90deg)" : undefined, transition: "0.25s" },
            }}
          >
            <FiChevronRight />
          </IconContext.Provider>
        </Flexbox>
      </Link>
      <Grid key={mode} {...styles.gridContainer}>
        <Grid {...styles.gridItem}>
          <Card {...styles.card}>
            <Typography {...styles.typography}>Full-Stack</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid {...styles.iconGridItem}>
                <Tooltip title="React" {...styles.tooltip}>
                  <motion.img alt="React" height={isMobile ? 26 : 32} src={react} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="React" href="https://react.dev" {...styles.link}>
                    React
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Vite" {...styles.tooltip}>
                  <motion.img alt="Vite" height={isMobile ? 26 : 32} src={vite} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Vite" href="https://vitejs.dev" {...styles.link}>
                    Vite
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="MUI" {...styles.tooltip}>
                  <motion.img alt="MUI" height={isMobile ? 26 : 32} src={mui} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="MUI" href="https://mui.com" {...styles.link}>
                    MUI
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Spring" {...styles.tooltip}>
                  <motion.img alt="Spring" height={isMobile ? 26 : 32} src={spring} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Spring" href="https://spring.io" {...styles.link}>
                    Spring
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Node.js" {...styles.tooltip}>
                  <motion.img
                    alt="Node.js"
                    height={isMobile ? 22 : 26}
                    src={nodejs}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Node.js" href="https://nodejs.org" {...styles.link}>
                    Node.js
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="PostgreSQL" {...styles.tooltip}>
                  <motion.img alt="PostgreSQL" height={isMobile ? 26 : 32} src={postgresql} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="PostgreSQL" href="https://www.postgresql.org" {...styles.link}>
                    PostgreSQL
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card {...styles.card}>
            <Typography {...styles.typography}>Cloud</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid {...styles.iconGridItem}>
                <Tooltip title="AWS Cloud" {...styles.tooltip}>
                  <motion.img
                    alt="AWS Cloud"
                    height={isMobile ? 26 : 32}
                    src={aws}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
                {expanded ?
                  <Link aria-label="AWS Cloud" href="https://aws.amazon.com" {...styles.link}>
                    AWS Cloud
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Docker" {...styles.tooltip}>
                  <motion.img alt="Docker" height={isMobile ? 26 : 32} src={docker} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Docker" href="https://www.docker.com" {...styles.link}>
                    Docker
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Terraform" {...styles.tooltip}>
                  <motion.img alt="Terraform" height={isMobile ? 26 : 32} src={terraform} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Terraform" href="https://www.terraformotion.io" {...styles.link}>
                    Terraform
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card {...styles.card}>
            <Typography {...styles.typography}>Build systems</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid {...styles.iconGridItem}>
                <Tooltip title="CMake" {...styles.tooltip}>
                  <motion.img alt="CMake" height={isMobile ? 26 : 32} src={cmake} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="CMake" href="https://cmake.org" {...styles.link}>
                    CMake
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Maven" {...styles.tooltip}>
                  <motion.img
                    alt="Maven"
                    height={isMobile ? 20 : 24}
                    src={maven}
                    style={{ filter: mode === "dark" ? undefined : "drop-shadow(0 0 0.5rem)" }}
                    {...styles.img}
                  />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Maven" href="https://maven.apache.org" {...styles.link}>
                    Maven
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Cargo" {...styles.tooltip}>
                  <motion.img alt="Cargo" height={isMobile ? 26 : 32} src={cargo} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Cargo" href="https://crates.io" {...styles.link}>
                    Cargo
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card {...styles.card}>
            <Typography {...styles.typography}>Data</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Pandas" {...styles.tooltip}>
                  <motion.img alt="Pandas" height={isMobile ? 26 : 32} src={pandas} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Pandas" href="https://pandas.pydata.org" {...styles.link}>
                    Pandas
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Polars" {...styles.tooltip}>
                  <motion.img alt="Polars" height={isMobile ? 26 : 32} src={polars} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Polars" href="https://pola.rs" {...styles.link}>
                    Polars
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="NumPy" {...styles.tooltip}>
                  <motion.img alt="NumPy" height={isMobile ? 26 : 32} src={numpy} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="NumPy" href="https://numpy.org" {...styles.link}>
                    NumPy
                  </Link>
                : null}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid {...styles.gridItem}>
          <Card {...styles.card}>
            <Typography {...styles.typography}>Other</Typography>
            <Grid
              alignItems={expanded ? "start" : "center"}
              direction={expanded ? "column" : "row"}
              rowGap={expanded ? 2 : undefined}
              {...styles.iconGridContainer}
            >
              <Grid {...styles.iconGridItem}>
                <Tooltip title="IDA Pro" {...styles.tooltip}>
                  <motion.img alt="IDA Pro" height={isMobile ? 26 : 32} src={ida} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="IDA Pro" href="https://hex-rays.com/ida-pro" {...styles.link}>
                    IDA Pro
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="Clang" {...styles.tooltip}>
                  <motion.img alt="Clang" height={isMobile ? 26 : 32} src={clang} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="Clang" href="https://clang.llvm.org" {...styles.link}>
                    Clang
                  </Link>
                : null}
              </Grid>
              <Grid {...styles.iconGridItem}>
                <Tooltip title="MSVC" {...styles.tooltip}>
                  <motion.img alt="MSVC" height={isMobile ? 26 : 32} src={msvc} {...styles.img} />
                </Tooltip>
                {expanded ?
                  <Link aria-label="MSVC" href="https://visualstudio.microsoft.com" {...styles.link}>
                    MSVC
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

export default Skills;

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.075 } },
} as const;

const item = {
  hidden: { opacity: 0, y: -128 },
  show: { opacity: 1, transition: { duration: 0.5 }, y: 0 },
} as const;

const styles = {
  card: {
    component: motion.div,
    layout: true,
    sx: { backdropFilter: "blur(0.5rem)", backgroundColor: "transparent", minHeight: 1, minWidth: 1 },
    whileHover: { borderColor: "#172554", y: -4 },
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
    component: motion.div,
    container: true,
    initial: "hidden",
    layout: true,
    minWidth: 1,
    spacing: 2,
    variants: container,
    whileInView: "show",
  },
  gridItem: {
    component: motion.div,
    layout: true,
    variants: item,
  },
  iconGridContainer: {
    component: motion.div,
    container: true,
    layout: true,
    spacing: 2,
  },
  iconGridItem: {
    alignItems: "center",
    component: motion.div,
    display: "flex",
    gap: isMobile ? 1 : 2,
    layout: true,
  },
  img: {
    layout: true,
    whileHover: { scale: 1.15 },
    whileTap: { scale: 1 },
  },
  link: {
    endDecorator: <FaLink />,
    level: isMobile ? "body-xs" : "body-md",
  },
  tooltip: {
    animate: { opacity: 1 },
    component: motion.div,
    initial: { opacity: 0 },
    layout: true,
  },
  typography: {
    component: motion.span,
    layout: true,
    level: "title-md",
  },
} as const;
