import { Card, Typography } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";

export const Education = memo(function Education() {
  return (
    <Card
      component={m.div}
      sx={{ height: 1, width: 1 }}
      whileHover={{ backgroundColor: "#111827" }}
      whileInView={{ opacity: [0, 1], transition: { duration: 0.5 } }}
    >
      <Typography level="title-md">University of California, Los Angeles</Typography>
      <Typography level="body-sm">B.S. Computer Science and Engineering</Typography>
    </Card>
  );
});
