import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import { Box, Card, Divider, Link, Tooltip, Typography } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import GitHubCalendar from "react-github-calendar";

import resume from "../assets/Angad Misra - Resume.pdf";
import mugshot from "../assets/mugshot.png";
import { Header } from "./Header";

export const MainCard = memo(function MainCard() {
  const { height, width } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <Card
      animate={{ scaleX: [0, 1], transition: { delay: 0.5, duration: 1, type: "spring" } }}
      component={m.div}
      sx={{ alignItems: "center", width: isWidescreen ? "80%" : "97.5%" }}
      whileHover={{ boxShadow: "#555555 0 0 10px", transition: { duration: 0.05 } }}
    >
      <Header />
      <Divider />
      <Box alignItems="center" display="flex" flexWrap="wrap" gap={3} justifyContent="space-evenly" my={3} width="100%">
        <Box
          animate={{ rotate: 360, scale: [0, 1], transition: { delay: 0.5, type: "spring" } }}
          component={m.div}
          display="grid"
          {...(!isMobile && {
            drag: true,
            dragSnapToOrigin: true,
            dragTransition: { bounceDamping: 10, bounceStiffness: 500 },
          })}
        >
          <img
            className="responsive"
            src={mugshot}
            style={{
              borderRadius: "100%",
              gridColumn: 1,
              gridRow: 1,
              maxHeight: "250px",
              maxWidth: "250px",
              minHeight: "20px",
              minWidth: "20px",
            }}
          />
          <m.div
            animate={{ rotate: 360, transition: { duration: 25, ease: "linear", repeat: Infinity } }}
            style={{
              borderRadius: "100%",
              gridColumn: 1,
              gridRow: 1,
              maxHeight: "250px",
              maxWidth: "250px",
              minHeight: "20px",
              minWidth: "20px",
              outline: "slategray dashed 2px",
              outlineOffset: "7px",
            }}
          />
        </Box>
        <Box alignItems="center" display="flex" flexDirection="column" gap={2} width={isWidescreen ? "50%" : "80%"}>
          <Typography>
            I am a B.S. Computer Science & Engineering graduate from UCLA, focusing in system programming and data engineering. My interests include
            reverse engineering, game programming, web development, AI/ML, and computability theory.
          </Typography>
          <Box display="flex" gap={3} mb={1}>
            <Link component={m.a} href={resume} startDecorator={<TextSnippet />} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              R&eacute;sum&eacute;
            </Link>
            <Link
              component={m.a}
              href="https://github.com/ThirdEyeSqueegee"
              startDecorator={<GitHub />}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              GitHub
            </Link>
            <Link
              component={m.a}
              href="https://www.linkedin.com/in/angadmisra"
              startDecorator={<LinkedIn />}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              LinkedIn
            </Link>
          </Box>
          <m.div animate={{ scale: [0, 1], transition: { delay: 1 } }}>
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
        </Box>
      </Box>
    </Card>
  );
});
