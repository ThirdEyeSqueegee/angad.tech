import resume from "@/assets/Angad Misra - Resume.pdf";
import { Button, Grid2 as Grid, Link } from "@mui/material";
import { motion } from "motion/react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdDownload, MdEmail } from "react-icons/md";

export const IntroButtons = () => (
  <Grid component={motion.div} layout container spacing={{ xs: 2, lg: 4 }} width={{ xs: "100%", lg: "80%" }}>
    {buttons.map(({ href, icon, label }, i) => (
      <Grid component={motion.div} layout key={i} size={{ xs: 6, lg: 3 }}>
        <Link href={href}>
          <Button
            component={motion.button}
            variant="contained"
            disableRipple
            startIcon={icon}
            sx={styles.button}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 36px 0px rgba(240,246,252,0.5)" }}
            whileTap={{ scale: 0.9 }}
            fullWidth
          >
            {label}
          </Button>
        </Link>
      </Grid>
    ))}
  </Grid>
);

const buttons = [
  { href: "mailto:hello@angad.tech", icon: <MdEmail />, label: "Email" },
  { href: "https://github.com/ThirdEyeSqueegee", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/angadmisra", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: resume, icon: <MdDownload />, label: "Résumé" },
];

const styles = {
  button: {
    borderRadius: 8,
    backgroundColor: "#f0f6fc",
    textTransform: "none",
  },
};
