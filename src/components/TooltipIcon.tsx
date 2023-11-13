import { Tooltip } from "@mui/joy";
import { m } from "framer-motion";
import { isMobile } from "react-device-detect";

export const TooltipIcon = (props: { src: string; title: string; width?: string; height?: string; href?: string }) => {
  return (
    <Tooltip title={props.title} component={m.div} animate={{ opacity: [0, 1] }}>
      {props.href ? (
        <m.a href={props.href} target="_blank" rel="noopener noreferrer" style={{ height: props.height ? props.height : "50px" }}>
          <m.img
            src={props.src}
            width={props.width ? props.width : "50px"}
            height={props.height ? props.height : "50px"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </m.a>
      ) : (
        <m.img
          src={props.src}
          width={props.width ? props.width : "50px"}
          height={props.height ? props.height : "50px"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          {...(!isMobile && {
            drag: true,
            dragSnapToOrigin: true,
            dragTransition: { bounceStiffness: 500, bounceDamping: 10 },
          })}
        />
      )}
    </Tooltip>
  );
};
