import { useWindowSize } from "@uidotdev/usehooks";
import { LazyMotion, domMax } from "framer-motion";
import { memo } from "react";

import { Flexbox } from "./atoms/Flexbox.tsx";
import { LanguagesCard } from "./molecules/LanguagesCard";
import { MainCard } from "./molecules/MainCard";
import { ProjectsCard } from "./molecules/ProjectsCard";
import { ToolsCard } from "./molecules/ToolsCard";

export const App = memo(function App() {
  const { height, width } = useWindowSize();
  const isWidescreen = width! / height! > 4 / 3;

  return (
    <LazyMotion features={domMax} strict>
      <Flexbox flexDirection="column" gap={2} p={isWidescreen ? 2 : 1}>
        <MainCard />
        <Flexbox alignItems="stretch" gap={2} width={isWidescreen ? 0.8 : 0.975} {...(!isWidescreen && { flexDirection: "column" })}>
          <Flexbox flex={1}>
            <LanguagesCard />
          </Flexbox>
          <Flexbox flex={1}>
            <ToolsCard />
          </Flexbox>
          <Flexbox flex={1}>
            <ProjectsCard />
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </LazyMotion>
  );
});
