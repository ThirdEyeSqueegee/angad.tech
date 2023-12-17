import { IconButton } from "@mui/joy";
import { m, scroll } from "framer-motion";
import { memo, useState } from "react";
import { IconContext } from "react-icons";
import { FiArrowDownCircle } from "react-icons/fi";

export const ScrollButton = memo(function ScrollButton() {
  const [scrollButtonOpacity, setScrollButtonOpacity] = useState(1);

  scroll((progress) => setScrollButtonOpacity(1 - progress));

  return (
    <IconButton
      component={m.button}
      onClick={() => window.scrollTo({ behavior: "smooth", top: document.body.scrollHeight })}
      sx={{
        "&:hover,&:active": { backgroundColor: "transparent" },
        bottom: "1rem",
        opacity: scrollButtonOpacity,
        position: "fixed",
        right: "1rem",
      }}
    >
      <IconContext.Provider value={{ color: "#6b7280", size: "2rem" }}>
        <FiArrowDownCircle />
      </IconContext.Provider>
    </IconButton>
  );
});
