import { IconButton } from "@mui/joy";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { memo, useRef } from "react";
import { isMobile } from "react-device-detect";
import { IconContext } from "react-icons";
import { FiArrowDownCircle } from "react-icons/fi";

export const ScrollButton = memo(function ScrollButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (ref.current) {
      ref.current.style.opacity = `${1 - progress}`;
    }
  });

  return (
    <IconButton
      onClick={() => window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight })}
      ref={ref}
      sx={{
        "&:hover,&:active": { backgroundColor: "transparent" },
        bottom: "1rem",
        position: "fixed",
        right: isMobile ? "0.5rem" : "1rem",
      }}
      {...styles.iconButton}
    >
      <IconContext.Provider value={{ color: "#6b7280", size: "2rem" }}>
        <FiArrowDownCircle />
      </IconContext.Provider>
    </IconButton>
  );
});

const styles = {
  iconButton: {
    "aria-label": "Scroll down",
    component: motion.button,
  },
} as const;
