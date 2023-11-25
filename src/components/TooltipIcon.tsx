import { Tooltip } from "@mui/joy";
import { m } from "framer-motion";
import { isMobile } from "react-device-detect";

export const TooltipIcon = (props: { height?: string; href?: string; src: string; title: string; width?: string }) => {
  const { height, href, src, title, width } = props;

  return (
    <Tooltip animate={{ opacity: [0, 1] }} component={m.div} title={title}>
      {href ? (
        <m.a href={href} rel="noopener noreferrer" style={{ height: height ? height : "50px" }} target="_blank">
          <m.img height={height ? height : "50px"} src={src} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width={width ? width : "50px"} />
        </m.a>
      ) : (
        <m.img
          height={height ? height : "50px"}
          src={src}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          width={width ? width : "50px"}
          {...(!isMobile && {
            drag: true,
            dragSnapToOrigin: true,
            dragTransition: { bounceDamping: 10, bounceStiffness: 500 },
          })}
        />
      )}
    </Tooltip>
  );
};
