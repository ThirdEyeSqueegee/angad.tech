import aws from "@/assets/logos/aws.svg";
import cargo from "@/assets/logos/cargo.webp";
import clang from "@/assets/logos/clang.webp";
import cmake from "@/assets/logos/cmake.svg";
import docker from "@/assets/logos/docker.svg";
import grafana from "@/assets/logos/grafana.svg";
import hibernate from "@/assets/logos/hibernate.svg";
import ida from "@/assets/logos/ida.webp";
import maven from "@/assets/logos/maven.svg";
import motionIcon from "@/assets/logos/motion.webp";
import msvc from "@/assets/logos/msvc.svg";
import mui from "@/assets/logos/mui.svg";
import nodejs from "@/assets/logos/nodejs.svg";
import opensearch from "@/assets/logos/opensearch.svg";
import pandas from "@/assets/logos/pandas.svg";
import postgresql from "@/assets/logos/postgresql.svg";
import react from "@/assets/logos/react.svg";
import sentry from "@/assets/logos/sentry.svg";
import spring from "@/assets/logos/spring.svg";
import terraform from "@/assets/logos/terraform.svg";
import vcpkg from "@/assets/logos/vcpkg.svg";
import vite from "@/assets/logos/vite.svg";
import { SkillCard } from "@/components/SkillCard.tsx";
import { Skill } from "@/types.ts";
import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import TypeIt from "typeit-react";

export const Skills = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack component={motion.div} layout spacing={1} width={1}>
      <Box component={motion.div} layout onClick={() => setExpanded(!expanded)} sx={styles.headerBox}>
        <Typography component={motion.span} layout variant="h5" fontWeight={600}>
          <TypeIt options={{ cursor: false, lifeLike: true }}>Skills</TypeIt>
        </Typography>
        <FaChevronRight style={{ transform: expanded ? "rotate(90deg)" : undefined, transitionDuration: "0.25s" }} />
      </Box>
      <Grid component={motion.div} layout container initial="hidden" whileInView="visible" variants={list} spacing={2}>
        {skills.map(({ title, skills }, i) => (
          <Grid component={motion.div} layout variants={item} key={i}>
            <SkillCard title={title} skills={skills} expanded={expanded} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

const fullStackskills: Skill[] = [
  { title: "React", url: "https://react.dev", icon: react },
  { title: "Vite", url: "https://vite.dev", icon: vite },
  { title: "MUI", url: "https://mui.com", icon: mui },
  { title: "Motion", url: "https://motion.dev", icon: motionIcon },
  { title: "Spring", url: "https://spring.io", icon: spring },
  { title: "Node.js", url: "https://nodejs.org", icon: nodejs },
];

const cloudDevOpsSkills: Skill[] = [
  { title: "AWS", url: "https://aws.amazon.com", icon: aws },
  { title: "Docker", url: "https://www.docker.com", icon: docker },
  { title: "Terraform", url: "https://www.terraform.io", icon: terraform },
  { title: "Grafana", url: "https://grafana.com", icon: grafana },
  { title: "Sentry", url: "https://sentry.io", icon: sentry },
];

const dataSkills: Skill[] = [
  { title: "PostgreSQL", url: "https://www.postgresql.org", icon: postgresql },
  { title: "OpenSearch", url: "https://opensearch.org", icon: opensearch },
  { title: "Hibernate", url: "https://hibernate.org", icon: hibernate },
  { title: "Pandas", url: "https://pandas.pydata.org", icon: pandas },
];

const buildSystemsSkills: Skill[] = [
  { title: "CMake", url: "https://cmake.org", icon: cmake },
  { title: "Maven", url: "https://maven.apache.org", icon: maven },
  { title: "vcpkg", url: "https://vcpkg.io", icon: vcpkg },
  { title: "Cargo", url: "https://crates.io", icon: cargo },
];

const otherSkills: Skill[] = [
  { title: "IDA Pro", url: "https://hex-rays.com/ida-pro", icon: ida },
  { title: "Clang", url: "https://clang.llvm.org", icon: clang },
  { title: "MSVC", url: "https://visualstudio.microsoft.com", icon: msvc },
];

const skills = [
  { title: "Full-Stack", skills: fullStackskills },
  { title: "Cloud/DevOps", skills: cloudDevOpsSkills },
  { title: "Data", skills: dataSkills },
  { title: "Build/Packaging", skills: buildSystemsSkills },
  { title: "Other", skills: otherSkills },
];

const styles = {
  headerBox: {
    display: "flex",
    flex: 0,
    gap: 1,
    maxWidth: "fit-content",
    alignItems: "center",
    cursor: "pointer",
  },
};
