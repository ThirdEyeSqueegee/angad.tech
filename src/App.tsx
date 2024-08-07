import { Grid, Stack, useColorScheme } from "@mui/joy";
import { useIsFirstRender } from "@uidotdev/usehooks";
import { LazyMotion, m, useMotionTemplate, useMotionValue } from "framer-motion";
// eslint-disable-next-line perfectionist/sort-named-imports
import { lazy, useState, type MouseEvent } from "react";
import { isMobile } from "react-device-detect";

import heptagram from "./assets/heptagram.svg";
import { Flexbox } from "./components/atoms/Flexbox.tsx";
import { GithubCalendar } from "./components/molecules/GithubCalendar.tsx";
import { ScrollButton } from "./components/molecules/ScrollButton.tsx";

const features = () => import("./framer.ts").then((res) => res.default);

const Education = lazy(() => import("./components/organisms/Education.tsx"));
const Experience = lazy(() => import("./components/organisms/Experience.tsx"));
const Header = lazy(() => import("./components/organisms/Header.tsx"));
const Intro = lazy(() => import("./components/organisms/Intro.tsx"));
const Languages = lazy(() => import("./components/organisms/Languages.tsx"));
const Projects = lazy(() => import("./components/organisms/Projects.tsx"));
const Skills = lazy(() => import("./components/organisms/Skills.tsx"));

export const App = () => {
  const { mode } = useColorScheme();

  const [showContent, setShowContent] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const isFirstRender = useIsFirstRender();

  return (
    <LazyMotion features={features} strict>
      <Stack
        component={m.div}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        style={
          !isMobile ?
            {
              background: useMotionTemplate`
                radial-gradient(
                  16rem circle at ${mouseX}px ${mouseY}px,
                  ${mode === "dark" ? "#111827" : "#e5e7eb"},
                  ${mode === "dark" ? "#030712" : "#f3f4f6"}
                )
              `,
            }
          : undefined
        }
      >
        {showContent ?
          <Header />
        : null}
        <Flexbox {...styles.mainFlex}>
          <m.img
            onAnimationComplete={() => setShowContent(true)}
            src={heptagram}
            style={{ display: isFirstRender ? undefined : "none", filter: mode === "dark" ? "invert(.75)" : undefined, width: "300px" }}
            {...styles.heptagram}
          />
          {showContent ?
            <Stack alignSelf="start" {...styles.content}>
              <Intro />
              <GithubCalendar />
              <Languages />
              <Skills />
              <Grid {...styles.gridContainer}>
                <Grid {...styles.gridItem}>
                  <Projects />
                </Grid>
                <Grid {...styles.gridItem}>
                  <Stack {...styles.stack}>
                    <Experience />
                    <Education />
                  </Stack>
                </Grid>
              </Grid>
              <ScrollButton />
            </Stack>
          : null}
        </Flexbox>
      </Stack>
    </LazyMotion>
  );
};

const styles = {
  content: {
    animate: { opacity: 1, transition: { duration: 1 } },
    component: m.div,
    gap: 5,
    initial: { opacity: 0 },
    layout: true,
    maxWidth: { lg: 0.5, xs: 0.9 },
    py: 2,
  },
  gridContainer: {
    alignItems: "start",
    component: m.div,
    container: true,
    direction: isMobile ? "column" : "row",
    layout: true,
    spacing: 2,
  },
  gridItem: {
    component: m.div,
    layout: true,
    xs: isMobile ? 12 : 6,
  },
  heptagram: {
    alt: "Heptagram",
    animate: { opacity: 0, rotate: -360, scale: 1, transitionEnd: { display: "none" } },
    initial: { scale: 0 },
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
    component: m.div,
    gap: isMobile ? 3 : 5,
    initial: { opacity: 0 },
    justifyContent: "space-evenly",
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
  mainFlex: {
    minHeight: "100vh",
    minWidth: 1,
    mt: 1,
  },
  stack: {
    component: m.div,
    gap: 2,
    layout: true,
  },
} as const;
