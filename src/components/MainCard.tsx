import { GitHub, LinkedIn, TextSnippet } from "@mui/icons-material";
import { Box, Card, Divider, Link, Tooltip, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { useContext } from "react";
import { isMobile } from "react-device-detect";
import GitHubCalendar from "react-github-calendar";
import resume from "../assets/Angad Misra - Resume.pdf";
import mugshot from "../assets/mugshot.png";
import { ScreenContext } from "../contexts/ScreenContext";
import { Header } from "./Header";

export const MainCard = () => {
  const { isWidescreen } = useContext(ScreenContext);

  return (
    <Card
      component={m.div}
      animate={{ scaleX: [0, 1], transition: { type: "spring", duration: 1, delay: 0.5 } }}
      whileHover={{ boxShadow: "#555555 0 0 10px", transition: { duration: 0.25 } }}
      sx={{ alignItems: "center", width: isWidescreen ? "80%" : "97.5%" }}
    >
      <Header isWidescreen={isWidescreen} />
      <Divider />
      <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly" width="100%" gap={3} my={3}>
        <Box
          display="grid"
          component={m.div}
          animate={{ scale: [0, 1], rotate: 360 }}
          transition={{ type: "spring", delay: 0.5 }}
          {...(!isMobile && {
            drag: true,
            dragSnapToOrigin: true,
            dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
          })}
        >
          <img
            src={mugshot}
            className="responsive"
            style={{
              borderRadius: "100%",
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "250px",
              maxHeight: "250px",
              gridRow: 1,
              gridColumn: 1,
            }}
          />
          <m.div
            style={{
              borderRadius: "100%",
              outline: "slategray dashed 2px",
              outlineOffset: "7px",
              minWidth: "20px",
              minHeight: "20px",
              maxWidth: "250px",
              maxHeight: "250px",
              gridRow: 1,
              gridColumn: 1,
            }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" width={isWidescreen ? "50%" : "80%"} gap={2}>
          <Typography>
            I am a B.S. Computer Science & Engineering graduate from UCLA, focusing in system programming and data engineering. My interests include
            reverse engineering, game programming, neural networks and deep learning, computer vision, and artificial intelligence.
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
              hideMonthLabels
              blockSize={isWidescreen ? 10 : 6}
              blockMargin={isWidescreen ? 2 : 1}
              renderBlock={(b, a) => (
                <Tooltip title={`${new Date(a.date).toLocaleDateString()}`} size="sm" component={m.div} animate={{ opacity: [0, 1] }}>
                  {b}
                </Tooltip>
              )}
            />
          </m.div>
        </Box>
      </Box>
    </Card>
  );
};
