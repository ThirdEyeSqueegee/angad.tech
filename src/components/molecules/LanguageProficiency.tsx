import { Link, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { FaLink } from "react-icons/fa6";

import { Flexbox } from "../atoms/Flexbox.tsx";

export const LanguageProficiency = memo(function LanguageProficiency(props: { language: string }) {
  const { language } = props;

  switch (language) {
    case "C++":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="primary" level={isMobile ? "body-xs" : "body-sm"}>
            5/10
          </Typography>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>
            (Keep in mind{" "}
            <Link endDecorator={<FaLink />} href="https://en.wikipedia.org/wiki/Bjarne_Stroustrup">
              Bjarne Stroustrup
            </Link>{" "}
            rates himself 7/10)
          </Typography>
        </Flexbox>
      );
    case "Python":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            9/10
          </Typography>
        </Flexbox>
      );
    case "C":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            9/10
          </Typography>
        </Flexbox>
      );
    case "TypeScript":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            9/10
          </Typography>
        </Flexbox>
      );
    case "Java":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            8/10
          </Typography>
        </Flexbox>
      );
    case "C#":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="primary" level={isMobile ? "body-xs" : "body-sm"}>
            6/10
          </Typography>
        </Flexbox>
      );
    case "x64 Assembly":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            8/10
          </Typography>
        </Flexbox>
      );
    case "Rust":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="primary" level={isMobile ? "body-xs" : "body-sm"}>
            7/10
          </Typography>
        </Flexbox>
      );
    case "Go":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="warning" level={isMobile ? "body-xs" : "body-sm"}>
            4/10 (Learning)
          </Typography>
        </Flexbox>
      );
    case "Haskell":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="warning" level={isMobile ? "body-xs" : "body-sm"}>
            4/10 (Learning)
          </Typography>
        </Flexbox>
      );
    case "Clojure":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="warning" level={isMobile ? "body-xs" : "body-sm"}>
            4/10 (Learning)
          </Typography>
        </Flexbox>
      );
    case "PowerShell":
      return (
        <Flexbox {...styles.flex}>
          <Typography level={isMobile ? "body-xs" : "body-sm"}>Proficiency:</Typography>
          <Typography color="success" level={isMobile ? "body-xs" : "body-sm"}>
            8/10
          </Typography>
        </Flexbox>
      );
  }
});

const styles = {
  flex: {
    component: m.div,
    gap: 1,
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0.5 } },
  },
} as const;
