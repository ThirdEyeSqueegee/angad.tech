import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import { Box, Card, Divider, Grid, Link, Tooltip, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { LazyMotion, domMax, m } from "framer-motion";
import { isMobile } from "react-device-detect";
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

export default function App() {
  const { width, height } = useWindowSize();
  const ratio = width! / height!;

  return (
    <LazyMotion strict features={domMax}>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2} p={ratio < 4 / 3 ? 1 : 2}>
        <Card
          component={m.div}
          animate={{ scaleX: [0, 1] }}
          transition={{
            type: "spring",
            duration: 1,
            delay: 0.5,
          }}
          sx={{
            width: ratio < 4 / 3 ? "97.5%" : "80%",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={ratio > 4 / 3 ? "4rem" : "2.75rem"}
            component={m.span}
            whileHover={{ rotate: [0, 3, -3, 3, -3, 0] }}
            transition={{ duration: 0.75 }}
            sx={{ userSelect: "none" }}
          >
            <TypeIt>Hello, world!</TypeIt>
          </Typography>
          <Divider />
          <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" width="100%" gap={3} my={3}>
            <m.img
              src={mugshot}
              className="responsive"
              style={{
                borderRadius: "100%",
                outline: "slategray dashed 2px",
                outlineOffset: "7px",
                minWidth: "20px",
                minHeight: "20px",
                maxWidth: "250px",
                maxHeight: "250px",
              }}
              animate={{ scale: [0, 1], rotate: 360 }}
              transition={{ type: "spring", delay: 0.5 }}
              {...(!isMobile && {
                drag: true,
                dragSnapToOrigin: true,
                dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
              })}
            />
            <Box display="flex" flexDirection="column" alignItems="center" width={ratio > 4 / 3 ? "50%" : "80%"} gap={2}>
              <Typography>
                I am a B.S. Computer Science & Engineering graduate from UCLA, focusing in system programming and data engineering. My interests
                include reverse engineering, game programming, neural networks and deep learning, computer vision, and artificial intelligence.
              </Typography>
              <Box display="flex" gap={3} mb={1}>
                <Link component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={resume} startDecorator={<TextSnippet />}>
                  R&eacute;sum&eacute;
                </Link>
                <Link
                  component={m.a}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/ThirdEyeSqueegee"
                  startDecorator={<GitHub />}
                >
                  GitHub
                </Link>
                <Link component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="" startDecorator={<LinkedIn />}>
                  LinkedIn
                </Link>
              </Box>
              <m.div animate={{ scale: [0, 1] }} transition={{ delay: 1 }}>
                <GitHubCalendar
                  username="ThirdEyeSqueegee"
                  hideColorLegend
                  blockSize={ratio > 4 / 3 ? 10 : 6}
                  blockMargin={ratio > 4 / 3 ? 2 : 1}
                  renderBlock={(b, a) => (
                    <Tooltip title={`${a.count} contributions on ${a.date}`} size="sm">
                      {b}
                    </Tooltip>
                  )}
                  {...(ratio < 4 / 3 && { hideMonthLabels: true })}
                />
              </m.div>
            </Box>
          </Box>
        </Card>
        <Box
          display="flex"
          justifyContent="center"
          width={ratio < 4 / 3 ? "97.5%" : "80%"}
          gap={2}
          {...(ratio < 4 / 3 && { flexDirection: "column" })}
        >
          <Box display="flex" flex={1} justifyContent="center">
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
          </Box>
          <Box display="flex" flex={1} justifyContent="center">
            <Card
              component={m.div}
              animate={{ y: [-500, 0], opacity: [0, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0.6 }}
              sx={{ alignItems: "center", width: "100%" }}
            >
              <Typography level="body-lg">Tools/frameworks I know</Typography>
              <Divider />
              <Grid container justifyContent="center" rowSpacing={5} height="100%" width="100%">
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={cmake} title="CMake" href="https://cmake.org" />
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={react} title="React" href="https://react.dev" />
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={postgres} title="PostgreSQL" href="https://www.postgresql.org" />
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={aws} title="AWS Cloud Suite" href="https://aws.amazon.com" />
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={pandas} title="Pandas" width="75px" href="https://pandas.pydata.org" />
                </Grid>
                <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={node} title="Node.js" width="75px" href="https://nodejs.org" />
                </Grid>
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={pytorch} title="PyTorch" href="https://pytorch.org" />
                </Grid>
                <Grid xs={6} display="flex" justifyContent="center" alignItems="center">
                  <TooltipIcon src={ida} title="IDA Pro" href="https://hex-rays.com/ida-pro" />
                </Grid>
              </Grid>
            </Card>
          </Box>
          <Box display="flex" flex={1} justifyContent="center">
            <Card
              component={m.div}
              animate={{ y: [-500, 0], opacity: [0, 1] }}
              transition={{ type: "spring", duration: 1, delay: 0.7 }}
              sx={{ alignItems: "center", width: "100%" }}
            >
              <Typography level="body-lg">Projects</Typography>
              <Divider />
              <Grid container justifyContent="center" rowSpacing={3} height="100%" width="100%">
                <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <Link
                    href="https://github.com/Starfield-Reverse-Engineering/CommonLibSF"
                    component={m.a}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    CommonLibSF
                  </Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    A collaborative reverse-engineered library for hacking <Link href="https://bethesda.net/en/game/starfield">Starfield</Link>
                  </Typography>
                </Grid>
                <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <Link href="https://gig.quest" component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    gig.quest
                  </Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    A simple web app for finding concerts and other events nearby
                  </Typography>
                </Grid>
                <Grid xs={12} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                  <Link href="https://en.wikipedia.org/wiki/Pintos" component={m.a} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    PintOS
                  </Link>
                  <Typography level="body-sm" width="67%" textAlign="center">
                    Full implementation of a POSIX-compliant operating system in C{" "}
                    <Typography fontSize="0.75rem">(source code provided upon request)</Typography>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Box>
      </Box>
    </LazyMotion>
  );
}
