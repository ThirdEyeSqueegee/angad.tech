import { Box, Card, Divider, Grid, Link, Tooltip, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import TypeIt from "typeit-react";
import resume from "./assets/Angad Misra - Resume.pdf";
import aws from "./assets/aws.svg";
import c from "./assets/c.svg";
import cmake from "./assets/cmake.svg";
import cpp from "./assets/cpp.svg";
import csharp from "./assets/csharp.svg";
import ida from "./assets/ida.svg";
import java from "./assets/java.svg";
import mugshot from "./assets/mugshot.png";
import node from "./assets/node.svg";
import pandas from "./assets/pandas.svg";
import postgres from "./assets/postgres.svg";
import python from "./assets/python.svg";
import pytorch from "./assets/pytorch.svg";
import react from "./assets/react.svg";
import ts from "./assets/typescript.svg";
import x64 from "./assets/x64.svg";
import { TooltipIcon } from "./components/TooltipIcon";

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastHalfYear = (contributions: Array<Activity>) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 6;

  return contributions.filter((activity) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

export default function App() {
  const { width, height } = useWindowSize();
  const ratio = width! / height!;

  return (
    <Box
      display="flex"
      justifyContent="center"
      p={ratio > 4 / 3 ? 2 : 1}
      gap={2}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        width={ratio > 4 / 3 ? "80%" : "100%"}
      >
        <Card
          component={motion.div}
          animate={{ scaleX: [0, 1] }}
          transition={{ type: "spring", duration: 0.75 }}
        >
          <Typography
            fontSize={ratio > 4 / 3 ? "3rem" : "2.75rem"}
            component={motion.span}
            whileHover={{ rotate: [0, 3, -3, 3, -3, 0] }}
            transition={{ duration: 0.75 }}
          >
            <TypeIt>Hello, world!</TypeIt>
          </Typography>
          <Divider />
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="space-evenly"
            width="100%"
            gap={2}
            mt={1}
          >
            <motion.img
              src={mugshot}
              className="responsive"
              style={{
                borderRadius: "100%",
                minWidth: "20px",
                minHeight: "20px",
                maxWidth: "250px",
                maxHeight: "250px",
              }}
              animate={{ scale: [0, 1], rotate: -360 }}
              transition={{ delay: 0.25 }}
            />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width={ratio > 4 / 3 ? "50%" : "80%"}
              gap={1}
            >
              <Typography>
                I am a B.S. Computer Science & Engineering graduate from UCLA,
                focusing in system programming and data engineering. My
                interests include reverse engineering, game programming, neural
                networks and deep learning, computer vision, and artificial
                intelligence.
              </Typography>
              <Box display="flex" gap={3} mb={1}>
                <Link
                  component={motion.a}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={resume}
                >
                  Resum&eacute;
                </Link>
                <Link
                  component={motion.a}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/ThirdEyeSqueegee"
                >
                  GitHub
                </Link>
                <Link
                  component={motion.a}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href=""
                >
                  LinkedIn
                </Link>
              </Box>
              <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 1 }}>
                <GitHubCalendar
                  username="ThirdEyeSqueegee"
                  transformData={selectLastHalfYear}
                  renderBlock={(b, a) => (
                    <Tooltip
                      title={`${a.count} ${`contribution${
                        a.count !== 1 ? "s" : ""
                      }`} on ${a.date}`}
                      size="sm"
                      component={motion.div}
                      animate={{ opacity: [0, 1] }}
                    >
                      {b}
                    </Tooltip>
                  )}
                  labels={{
                    totalCount:
                      "{{count}} GitHub contributions in the last 6 months",
                  }}
                  hideColorLegend
                />
              </motion.div>
            </Box>
          </Box>
        </Card>
        <Grid container spacing={1} columnSpacing={5} justifyContent="center">
          <Grid
            xs={8}
            lg={4}
            height={ratio > 4 / 3 ? "100%" : "auto"}
            width="100%"
          >
            <Card
              component={motion.div}
              animate={{ y: [500, 0] }}
              transition={{ type: "spring", duration: 0.75 }}
            >
              <Typography level="body-lg">I speak</Typography>
              <Grid
                container
                justifyContent="center"
                rowGap={5}
                mt={1}
                height="100%"
                width="100%"
              >
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={c} title="C" />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={cpp} title="C++" />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={csharp} title="C#" />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={java} title="Java" />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={python} title="Python" />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={x64} title="x64 assembly" />
                </Grid>
                <Grid
                  xs={12}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon src={ts} title="TypeScript" />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid
            xs={8}
            lg={4}
            height={ratio > 4 / 3 ? "100%" : "auto"}
            width="100%"
          >
            <Card
              component={motion.div}
              animate={{ y: [500, 0] }}
              transition={{ type: "spring", duration: 0.75, delay: 0.1 }}
            >
              <Typography level="body-lg">Tools/frameworks I know</Typography>
              <Grid
                container
                justifyContent="center"
                rowGap={5}
                mt={1}
                height="100%"
                width="100%"
              >
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={cmake}
                    title="CMake"
                    href="https://cmake.org"
                  />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={react}
                    title="React"
                    href="https://react.dev"
                  />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={postgres}
                    title="PostgreSQL"
                    href="https://www.postgresql.org"
                  />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={aws}
                    title="AWS Cloud Suite"
                    href="https://aws.amazon.com"
                  />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={pandas}
                    title="Pandas"
                    width="75px"
                    href="https://pandas.pydata.org"
                  />
                </Grid>
                <Grid
                  xs={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={node}
                    title="Node.js"
                    width="75px"
                    href="https://nodejs.org"
                  />
                </Grid>
                <Grid
                  xs={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={pytorch}
                    title="PyTorch"
                    href="https://pytorch.org"
                  />
                </Grid>
                <Grid
                  xs={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <TooltipIcon
                    src={ida}
                    title="IDA Pro"
                    href="https://hex-rays.com/ida-pro"
                  />
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid
            xs={8}
            lg={4}
            height={ratio > 4 / 3 ? "100%" : "auto"}
            width="100%"
          >
            <Card
              component={motion.div}
              animate={{ y: [500, 0] }}
              transition={{ type: "spring", duration: 0.75, delay: 0.2 }}
            >
              <Typography level="body-lg">Projects</Typography>
              <Grid
                container
                justifyContent="center"
                rowGap={3}
                mt={1}
                height="100%"
                width="100%"
              >
                <Grid
                  xs={12}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF">
                    CommonLibSF
                  </Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    A collaborative reverse-engineered library for hacking{" "}
                    <Link href="https://bethesda.net/en/game/starfield">
                      Starfield
                    </Link>
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link href="https://gig.quest">gig.quest</Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    A simple web app for finding concerts and other events
                    nearby
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link href="https://en.wikipedia.org/wiki/Pintos">
                    PintOS
                  </Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    Full implementation of a POSIX-compliant operating system in
                    C{" "}
                    <Typography fontSize="0.75rem">
                      (source code provided upon request)
                    </Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
