import { Box } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { LazyMotion, domMax } from "framer-motion";
import { memo } from "react";

import { LanguagesCard } from "./components/LanguagesCard";
import { MainCard } from "./components/MainCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ToolsCard } from "./components/ToolsCard";

export const App = memo(function App() {
  const { height, width } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <LazyMotion features={domMax} strict>
      <Box alignItems="center" display="flex" flexDirection="column" gap={2} justifyContent="center" p={isWidescreen ? 2 : 1}>
        <MainCard />
        <Box
          display="flex"
          gap={2}
          justifyContent="center"
          width={isWidescreen ? "80%" : "97.5%"}
          {...(!isWidescreen && { flexDirection: "column" })}
        >
          <Box display="flex" flex={1} justifyContent="center">
            <LanguagesCard />
          </Box>
          <Box display="flex" flex={1} justifyContent="center">
            <ToolsCard />
          </Box>
          <Box display="flex" flex={1} justifyContent="center">
            <ProjectsCard />
          </Box>
        </Box>
      </Box>
    </LazyMotion>
  );
});
