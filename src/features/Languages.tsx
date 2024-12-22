import c from "@/assets/logos/c.svg";
import cpp from "@/assets/logos/cpp.svg";
import csharp from "@/assets/logos/csharp.svg";
import java from "@/assets/logos/java.svg";
import python from "@/assets/logos/python.svg";
import rust from "@/assets/logos/rust.svg";
import typescript from "@/assets/logos/typescript.svg";
import x64 from "@/assets/logos/x64.svg";
import { Box, Chip, Divider, Grid2 as Grid, Link, Stack, Tooltip, Typography } from "@mui/material";
import { motion } from "motion/react";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import TypeIt from "typeit-react";

export const Languages = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Stack component={motion.div} layout spacing={1} width={1}>
      <Box component={motion.div} layout onClick={() => setExpanded(!expanded)} sx={styles.headerBox}>
        <Typography component={motion.span} layout variant="h5" fontWeight={600}>
          <TypeIt options={{ cursor: false, lifeLike: true }}>Languages</TypeIt>
        </Typography>
        <FaChevronRight style={{ transform: expanded ? "rotate(90deg)" : undefined, transitionDuration: "0.25s" }} />
      </Box>
      <Stack component={motion.div} layout spacing={2}>
        <Grid component={motion.div} layout container spacing={{ xs: 3, lg: expanded ? 2 : 6 }} direction={expanded ? "column" : undefined}>
          {languages.map(({ name, logo, level }, i) => (
            <Grid component={motion.div} layout key={i} size="auto">
              <Stack component={motion.div} layout spacing={2} direction="row" divider={<Divider orientation="vertical" flexItem />} sx={styles.languageBox}>
                <Tooltip title={expanded ? "" : name}>
                  <motion.img layout src={logo} alt="" height="40px" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
                </Tooltip>
                {expanded && (
                  <Stack component={motion.div} layout>
                    <Typography component={motion.span} layout fontFamily="Fira Code Variable">
                      <TypeIt options={{ cursor: false, lifeLike: true }}>{name}</TypeIt>
                    </Typography>
                    <Grid component={motion.div} layout container spacing={1}>
                      <Grid component={motion.div} layout>
                        <Typography component={motion.span} layout variant="caption">
                          Proficiency:
                        </Typography>
                      </Grid>
                      <Grid component={motion.div} layout>
                        <Chip label={`${level}/10`} color={level > 7 ? "success" : "primary"} size="small" variant="outlined" />
                        {name === "C++" && (
                          <Typography component={motion.span} layout variant="caption">
                            {" "}
                            (keep in mind that <Link href="https://en.wikipedia.org/wiki/Bjarne_Stroustrup">Bjarne Stroustrup</Link> rates himself 7/10)
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Typography component={motion.span} layout align="justify">
          I speak human languages too! I&apos;m fluent in 🇺🇸 English and 🇮🇳 हिन्दी, no hablo 🇪🇸 Espa&ntilde;ol con fluidez pero me defiendo, und ich lerne zurzeit 🇩🇪 Deutsch.
        </Typography>
      </Stack>
    </Stack>
  );
};

const languages = [
  { name: "C++", logo: cpp, level: 6 },
  { name: "TypeScript", logo: typescript, level: 9 },
  { name: "Java", logo: java, level: 9 },
  { name: "Python", logo: python, level: 9 },
  { name: "C", logo: c, level: 9 },
  { name: "x64 Assembly", logo: x64, level: 9 },
  { name: "Rust", logo: rust, level: 6 },
  { name: "C#", logo: csharp, level: 6 },
];

const styles = {
  headerBox: {
    display: "flex",
    flex: 0,
    gap: 1,
    maxWidth: "fit-content",
    alignItems: "center",
    cursor: "pointer",
  },
  languageBox: {
    alignItems: "center",
  },
};
