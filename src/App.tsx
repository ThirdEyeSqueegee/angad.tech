import { Button, ButtonGroup, Grid, IconButton, Link, Stack, Tooltip, Typography, useColorScheme } from "@mui/joy";
import { LazyMotion, domMax, m, scroll } from "framer-motion";
import { useState } from "react";
import { isMobile } from "react-device-detect";
import GitHubCalendar from "react-github-calendar";
import { IconContext } from "react-icons";
import { FaCircleArrowDown, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import TypeIt from "typeit-react";

import resume from "./assets/Resume.pdf";
import heptagram from "./assets/heptagram.svg";
import mugshot from "./assets/mugshot.png";
import { Flexbox } from "./components/atoms/Flexbox.tsx";
import { Education } from "./components/molecules/Education.tsx";
import { Experience } from "./components/molecules/Experience.tsx";
import { Header } from "./components/molecules/Header.tsx";
import { Languages } from "./components/molecules/Languages.tsx";
import { Projects } from "./components/molecules/Projects.tsx";
import { Skills } from "./components/molecules/Skills.tsx";

export const App = () => {
  const { mode } = useColorScheme();

  const [showContent, setShowContent] = useState(false);

  const [scrollButtonOpacity, setScrollButtonOpacity] = useState(1);

  scroll((progress) => setScrollButtonOpacity(1 - progress));

  return (
    <LazyMotion features={domMax} strict>
      <Stack>
        {showContent ?
          <Header />
        : null}
        <Flexbox {...styles.mainFlex}>
          <m.img
            onAnimationComplete={() => setShowContent(true)}
            src={heptagram}
            style={{ filter: mode === "dark" ? "invert(.75)" : undefined, width: "300px" }}
            {...styles.heptagram}
          />
          {showContent ?
            <Stack alignSelf="start" {...styles.content}>
              <Flexbox flexDirection={isMobile ? "column" : "row"} justifyContent="space-evenly" {...styles.intro}>
                <img src={mugshot} {...styles.img} />
                <Stack gap={2}>
                  <Typography>
                    I am a software engineer specialized in system programming, data engineering, and full-stack development. My interests include
                    machine learning, reverse engineering, game programming, and computability theory.
                  </Typography>
                  <ButtonGroup sx={{ alignSelf: "center" }}>
                    <Button component={Link} href="https://www.linkedin.com/in/angadmisra" startDecorator={<FaLinkedinIn />}>
                      LinkedIn
                    </Button>
                    {isMobile ?
                      <Button component={Link} href="https://github.com/ThirdEyeSqueegee" startDecorator={<FaGithub />}>
                        GitHub
                      </Button>
                    : null}
                    <Button component={Link} href={resume} startDecorator={<MdDownload />}>
                      R&eacute;sum&eacute;
                    </Button>
                  </ButtonGroup>
                </Stack>
              </Flexbox>
              <Flexbox alignSelf="center" component={m.div} gap={3} viewport={{ once: true }} whileInView={{ opacity: [0, 1] }}>
                {!isMobile ?
                  <Tooltip title="GitHub" {...styles.tooltip}>
                    <IconButton
                      component={m.button}
                      sx={{ alignSelf: "start" }}
                      whileHover={{ backgroundColor: "transparent", scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link href="https://github.com/ThirdEyeSqueegee" overlay />
                      <IconContext.Provider value={{ size: "3rem" }}>
                        <FaGithub />
                      </IconContext.Provider>
                    </IconButton>
                  </Tooltip>
                : null}
                <GitHubCalendar
                  blockMargin={isMobile ? 1 : 2}
                  blockSize={isMobile ? 6 : 10}
                  colorScheme={mode === "dark" ? "dark" : "light"}
                  hideColorLegend
                  hideMonthLabels={isMobile}
                  labels={{ totalCount: "{{count}} contributions in the past year" }}
                  renderBlock={(b, a) => (
                    <Tooltip
                      animate={{ opacity: [0, 1] }}
                      component={m.div}
                      size="sm"
                      title={`${a.count} contributions on ${new Date(a.date).toLocaleDateString()}`}
                    >
                      {b}
                    </Tooltip>
                  )}
                  username="ThirdEyeSqueegee"
                />
              </Flexbox>
              <Stack {...styles.contentItem}>
                <Typography level="h3">
                  <TypeIt options={{ cursor: false }}>Languages</TypeIt>
                </Typography>
                <Languages />
              </Stack>
              <Stack {...styles.contentItem}>
                <Typography level="h3">
                  <TypeIt options={{ cursor: false }}>Skills</TypeIt>
                </Typography>
                <Skills />
              </Stack>
              <Grid alignItems="start" container spacing={2}>
                <Grid lg={6} xs={12}>
                  <Stack {...styles.contentItem}>
                    <Typography level="h3">
                      <TypeIt options={{ cursor: false }}>Projects</TypeIt>
                    </Typography>
                    <Projects />
                  </Stack>
                </Grid>
                <Grid lg={6} xs={12}>
                  <Stack gap={4}>
                    <Stack {...styles.contentItem}>
                      <Typography level="h3">
                        <TypeIt options={{ cursor: false }}>Experience</TypeIt>
                      </Typography>
                      <Experience />
                    </Stack>
                    <Stack {...styles.contentItem}>
                      <Typography level="h3">
                        <TypeIt options={{ cursor: false }}>Education</TypeIt>
                      </Typography>
                      <Education />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
              <IconButton
                component={m.button}
                onClick={() => window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight })}
                sx={{
                  "&:hover,&:active": { backgroundColor: "transparent" },
                  bottom: "1rem",
                  opacity: scrollButtonOpacity,
                  position: "fixed",
                  right: "1rem",
                }}
              >
                <IconContext.Provider value={{ color: "#6b7280", size: "2rem" }}>
                  <FaCircleArrowDown />
                </IconContext.Provider>
              </IconButton>
            </Stack>
          : null}
        </Flexbox>
      </Stack>
    </LazyMotion>
  );
};

const styles = {
  content: {
    gap: 5,
    maxWidth: { lg: 0.5, xs: 0.9 },
    py: 2,
  },
  contentItem: {
    gap: 2,
    minWidth: 1,
  },
  heptagram: {
    animate: { opacity: [1, 0], rotate: -360, scale: [0, 1], transitionEnd: { display: "none" } },
    transition: { duration: 1, opacity: { delay: 1.5, duration: 0.5 } },
  },
  img: {
    style: {
      borderRadius: "100%",
      maxHeight: "10rem",
      maxWidth: "10rem",
    },
  },
  intro: {
    gap: isMobile ? 3 : 5,
  },
  mainFlex: {
    minHeight: "100vh",
    minWidth: 1,
  },
  tooltip: {
    animate: { opacity: [0, 1] },
  },
};
