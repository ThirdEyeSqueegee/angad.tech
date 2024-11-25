import { IconButton, Link, Tooltip, useColorScheme } from "@mui/joy";
import { motion } from "motion/react";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import GitHubCalendar from "react-github-calendar";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa6";

import { Flexbox } from "../atoms/Flexbox.tsx";

export const GithubCalendar = memo(function GithubCalendar() {
  const { mode } = useColorScheme();

  return (
    <Flexbox {...styles.calendarBox}>
      {isMobile ? null : (
        <Tooltip title="GitHub" {...styles.tooltip}>
          <IconButton {...styles.iconButton}>
            <Link aria-label="GitHub" href="https://github.com/ThirdEyeSqueegee" overlay />
            <IconContext.Provider value={{ size: "3rem" }}>
              <FaGithub />
            </IconContext.Provider>
          </IconButton>
        </Tooltip>
      )}
      <GitHubCalendar
        blockMargin={isMobile ? 1 : 2}
        blockSize={isMobile ? 6 : 10}
        colorScheme={mode === "dark" ? "dark" : "light"}
        hideColorLegend
        hideMonthLabels={isMobile}
        labels={{ totalCount: "{{count}} public contributions in the past year" }}
        renderBlock={(b, a) => (
          <Tooltip size="sm" title={`${a.count} public contributions on ${new Date(a.date).toLocaleDateString()}`} {...styles.tooltip}>
            {b}
          </Tooltip>
        )}
        username="ThirdEyeSqueegee"
      />
    </Flexbox>
  );
});

const styles = {
  calendarBox: {
    alignSelf: "center",
    component: motion.div,
    gap: 3,
    initial: { opacity: 0 },
    layout: true,
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
  iconButton: {
    "aria-label": "GitHub",
    component: motion.button,
    initial: { opacity: 0, x: -128 },
    sx: { alignSelf: "center", ":hover": { backgroundColor: "rgba(0, 0, 0, 0)" } },
    whileHover: { scale: 1.1 },
    whileInView: { opacity: 1, rotate: 360, transition: { duration: 0.75, type: "spring" }, x: 0 },
    whileTap: { scale: 0.9 },
  },
  tooltip: {
    animate: { opacity: 1 },
    component: motion.div,
    initial: { opacity: 0 },
  },
} as const;
