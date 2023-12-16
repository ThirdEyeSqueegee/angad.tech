import { Button, ButtonGroup, IconButton, Link, Stack, Tooltip, Typography } from "@mui/joy";
import { LazyMotion, domMax, m } from "framer-motion";
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
import { Languages } from "./components/molecules/Languages.tsx";
import { Projects } from "./components/molecules/Projects.tsx";
import { Skills } from "./components/molecules/Skills.tsx";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const App = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <LazyMotion features={domMax} strict>
      <Flexbox {...styles.mainFlex}>
        <m.img onAnimationComplete={() => setShowContent(true)} src={heptagram} {...styles.heptagram} />
        {showContent ?
          <Stack alignSelf="start" {...styles.content}>
            <Typography alignSelf="center" level="h1">
              <TypeIt options={{ cursor: false }}>Hello, world!</TypeIt>
            </Typography>
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
            <Flexbox alignSelf="center" animate={{ opacity: [0, 1], transition: { delay: 1 } }} component={m.div} gap={3}>
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
              <Typography alignSelf="start" level="h3">
                Languages
              </Typography>
              <Languages />
            </Stack>
            <Stack {...styles.contentItem}>
              <Typography alignSelf="start" level="h3">
                Skills
              </Typography>
              <Skills />
            </Stack>
            <Flexbox alignItems="start" flexDirection={isMobile ? "column" : "row"} gap={2}>
              <Stack {...styles.contentItem}>
                <Typography alignSelf="start" level="h3">
                  Projects
                </Typography>
                <Projects />
              </Stack>
              <Stack gap={2} width={1}>
                <Stack {...styles.contentItem}>
                  <Typography alignSelf="start" level="h3">
                    Experience
                  </Typography>
                  <Experience />
                </Stack>
                <Stack {...styles.contentItem}>
                  <Typography alignSelf="start" level="h3">
                    Education
                  </Typography>
                  <Education />
                </Stack>
              </Stack>
            </Flexbox>
            <IconButton
              onClick={() => window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight })}
              sx={{ "&:hover,&:active": { backgroundColor: "transparent" }, bottom: "1rem", position: "fixed", right: "1rem" }}
            >
              <IconContext.Provider value={{ size: "2rem" }}>
                <FaCircleArrowDown />
              </IconContext.Provider>
            </IconButton>
          </Stack>
        : null}
      </Flexbox>
    </LazyMotion>
  );
};

const styles = {
  content: {
    animate: "show",
    component: m.div,
    gap: 4,
    initial: "hidden",
    py: 2,
    variants: container,
    width: { lg: 0.5, xs: 0.9 },
  },
  contentItem: {
    component: m.div,
    gap: 2,
    variants: item,
    width: 1,
  },
  heptagram: {
    animate: { opacity: [1, 0], rotate: -360, scale: [0, 1], transitionEnd: { display: "none" } },
    style: { filter: "invert(75%)", width: "300px" },
    transition: { duration: 1, opacity: { delay: 1.5, duration: 0.5 } },
  },
  img: {
    style: {
      borderRadius: "100%",
      GridColumn: 1,
      GridRow: 1,
      height: "10rem",
      width: "10rem",
    },
  },
  intro: {
    component: m.div,
    gap: isMobile ? 3 : 5,
    variants: item,
  },
  mainFlex: {
    height: "100vh",
    width: 1,
  },
  tooltip: {
    animate: { opacity: [0, 1] },
  },
};
