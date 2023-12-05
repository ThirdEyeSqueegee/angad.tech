import { Card, Divider, Link, Tooltip, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import GitHubCalendar from "react-github-calendar";
import { FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";

import resume from "../assets/Angad Misra - Resume.pdf";
import mugshot from "../assets/mugshot.png";
import { Flexbox } from "../atoms/Flexbox.tsx";
import { Header } from "../atoms/Header";

export const MainCard = memo(function MainCard() {
  const { height, width } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <Card sx={{ alignItems: "center", height: 1, justifyContent: "center", width: isWidescreen ? 0.8 : 0.975 }} {...styles.card}>
      <Header />
      <Divider />
      <Flexbox flexWrap="wrap" gap={3} justifyContent="space-evenly" my={3} width={1}>
        <Flexbox {...styles.imgBox}>
          <img src={mugshot} {...styles.img} />
          <m.div {...styles.imgBorder} />
        </Flexbox>
        <Flexbox flexDirection="column" gap={2} width={isWidescreen ? 0.5 : 0.8}>
          <Typography>
            I am a B.S. Computer Science & Engineering graduate from UCLA, focusing in system programming and data engineering. My interests include
            reverse engineering, game programming, web development, AI/ML, and computability theory.
          </Typography>
          <Flexbox display="flex" gap={3} mb={1}>
            <Link href={resume} startDecorator={<FiFileText fontSize="1.5rem" />} {...styles.link}>
              R&eacute;sum&eacute;
            </Link>
            <Link href="https://github.com/ThirdEyeSqueegee" startDecorator={<FiGithub fontSize="1.5rem" />} {...styles.link}>
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/angadmisra" startDecorator={<FiLinkedin fontSize="1.5rem" />} {...styles.link}>
              LinkedIn
            </Link>
          </Flexbox>
          <m.div {...styles.calendarDiv}>
            <GitHubCalendar
              blockMargin={isWidescreen ? 2 : 1}
              blockSize={isWidescreen ? 10 : 6}
              hideColorLegend
              hideMonthLabels
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
          </m.div>
        </Flexbox>
      </Flexbox>
    </Card>
  );
});

const styles = {
  calendarDiv: {
    animate: { scale: [0, 1], transition: { delay: 1 } },
  },
  card: {
    animate: { scaleX: [0, 1], transition: { delay: 0.5, duration: 1, type: "spring" } },
    whileHover: { boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } },
  },
  img: {
    className: "responsive",
    style: {
      borderRadius: "100%",
      gridColumn: 1,
      gridRow: 1,
      height: "15rem",
      width: "15rem",
    },
  },
  imgBorder: {
    animate: { rotate: 360, transition: { duration: 25, ease: "linear", repeat: Infinity } },
    style: {
      borderRadius: "100%",
      gridColumn: 1,
      gridRow: 1,
      height: "15rem",
      outline: "slategray dashed 2px",
      outlineOffset: "0.5rem",
      width: "15rem",
    },
  },
  imgBox: {
    animate: { rotate: 360, scale: [0, 1], transition: { delay: 0.5, type: "spring" } },
    component: m.div,
    display: "grid",
    ...(!isMobile && {
      drag: true,
      dragSnapToOrigin: true,
      dragTransition: { bounceDamping: 10, bounceStiffness: 500 },
    }),
  },
  link: {
    component: m.a,
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
};
