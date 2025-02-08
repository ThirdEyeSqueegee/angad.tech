import aws from "@/assets/logos/aws.svg";
import buildingease from "@/assets/logos/buildingease.png";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, timelineItemClasses, TimelineSeparator } from "@mui/lab";
import { Box, Stack, Typography } from "@mui/material";
import { motion } from "motion/react";
import TypeIt from "typeit-react";

export const Experience = () => (
  <Stack component={motion.div} layout spacing={1} width={1}>
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
        mb: 0,
        pl: 1,
        mt: 0,
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" gap={2} alignItems="center">
            <img src={aws} height={32} alt="Amazon Web Services, Inc." />
            <Stack>
              <Typography>Software Engineer &mdash; Amazon Web Services, Inc.</Typography>
              <Typography variant="caption" color="textSecondary">
                2025 &ndash; Present
              </Typography>
            </Stack>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" gap={2} alignItems="center">
            <img src={buildingease} width={32} alt="BuildingEase, Inc." />
            <Stack>
              <Typography>Software Developer (Full-Stack) &mdash; BuildingEase, Inc.</Typography>
              <Typography variant="caption" color="textSecondary">
                2024 &ndash; 2025
              </Typography>
            </Stack>
          </Box>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ mb: -3 }}>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Box display="flex" gap={2} alignItems="center">
            <img src={buildingease} width={32} alt="BuildingEase, Inc." />
            <Stack>
              <Typography>Software Developer Intern &mdash; BuildingEase, Inc.</Typography>
              <Typography variant="caption" color="textSecondary">
                2021 &ndash; 2023
              </Typography>
            </Stack>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </Stack>
);
