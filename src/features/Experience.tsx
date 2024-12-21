import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from "@mui/lab";
import { Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import TypeIt from "typeit-react";

export const Experience = () => (
  <Stack component={motion.div} layout spacing={1}>
    <Typography component={motion.span} layout variant="h5" fontWeight={600}>
      <TypeIt options={{ cursor: false, lifeLike: true }}>Experience</TypeIt>
    </Typography>
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        py: 0,
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Stack>
            <Typography>Software Developer (Full-Stack) &mdash; BuildingEase, Inc.</Typography>
            <Typography variant="caption" color="textSecondary">
              2024 &ndash; Present
            </Typography>
          </Stack>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ mb: -3 }}>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Stack>
            <Typography>Software Developer Intern &mdash; BuildingEase, Inc.</Typography>
            <Typography variant="caption" color="textSecondary">
              2021 &ndash; 2023
            </Typography>
          </Stack>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Stack>
);
