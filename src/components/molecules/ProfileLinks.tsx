import { Button, ButtonGroup, Link } from "@mui/joy";
import { memo } from "react";
import { isMobile } from "react-device-detect";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

import resume from "../../assets/Resume.pdf";

export const ProfileLinks = memo(function Links() {
  return (
    <ButtonGroup {...styles.buttonGroup}>
      <Button href="https://www.linkedin.com/in/angadmisra" startDecorator={<FaLinkedinIn />} {...styles.button}>
        LinkedIn
      </Button>
      {isMobile ?
        <Button href="https://github.com/ThirdEyeSqueegee" startDecorator={<FaGithub />} {...styles.button}>
          GitHub
        </Button>
      : null}
      <Button href={resume} startDecorator={<MdDownload />} {...styles.button}>
        R&eacute;sum&eacute;
      </Button>
    </ButtonGroup>
  );
});

const styles = {
  button: {
    component: Link,
    sx: { "&:hover,&:active": { transition: "0.25s" } },
  },
  buttonGroup: {
    sx: { alignSelf: "center", mt: 1 },
  },
} as const;
