import { Box } from "@mui/joy";
import { useWindowSize } from "@uidotdev/usehooks";
import { LazyMotion, domMax } from "framer-motion";
import { LanguagesCard } from "./components/LanguagesCard";
import { MainCard } from "./components/MainCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { ToolsCard } from "./components/ToolsCard";
import { ScreenContext } from "./contexts/ScreenContext";

export default function App() {
  const { width, height } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <ScreenContext.Provider value={{ isWidescreen: isWidescreen }}>
      <LazyMotion strict features={domMax}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2} p={isWidescreen ? 2 : 1}>
          <MainCard />
          <Box
            display="flex"
            justifyContent="center"
            width={isWidescreen ? "80%" : "97.5%"}
            gap={2}
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
    </ScreenContext.Provider>
  );
}
