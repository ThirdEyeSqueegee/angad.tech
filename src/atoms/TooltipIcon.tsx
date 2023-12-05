import { Tooltip } from "@mui/joy";
import { m } from "framer-motion";
import { memo } from "react";
import { isMobile } from "react-device-detect";

export const TooltipIcon = memo(function TooltipIcon(props: { height?: number; href?: string; src: string; title: string; width?: number }) {
  const { height, href, src, title, width } = props;

  return (
    <Tooltip title={title} {...styles.tooltip}>
      {href ?
        <m.a href={href} {...styles.a}>
          <m.img height={height ?? 50} src={src} width={width ?? 50} {...styles.img} />
        </m.a>
      : <m.img height={height ?? 50} src={src} width={width ?? 50} {...styles.img} />}
    </Tooltip>
  );
});

const styles = {
  a: {
    drag: !isMobile,
    dragSnapToOrigin: !isMobile,
    dragTransition: { bounceDamping: 10, bounceStiffness: 500 },
    rel: "noopener noreferrer",
    target: "_blank",
  },
  img: {
    drag: !isMobile,
    dragSnapToOrigin: !isMobile,
    dragTransition: { bounceDamping: 10, bounceStiffness: 500 },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.9 },
  },
  tooltip: {
    animate: { opacity: [0, 1] },
    component: m.div,
  },
};
