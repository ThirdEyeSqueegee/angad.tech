import { Tooltip } from "@mui/joy";
import { motion } from "framer-motion";

export const TooltipIcon = (props: {
  src: string;
  title: string;
  width?: string;
  height?: string;
  href?: string;
}) => {
  return (
    <Tooltip
      title={props.title}
      component={motion.div}
      animate={{ opacity: [0, 1] }}
    >
      {props.href ? (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: props.height ? props.height : "50px" }}
        >
          <motion.img
            src={props.src}
            width={props.width ? props.width : "50px"}
            height={props.height ? props.height : "50px"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </a>
      ) : (
        <motion.img
          src={props.src}
          width={props.width ? props.width : "50px"}
          height={props.height ? props.height : "50px"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      )}
    </Tooltip>
  );
};
