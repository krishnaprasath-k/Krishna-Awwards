import { MotionProps } from "motion/react";
import * as motion from "motion/react-client";
type LogoFullProps = MotionProps & {
  className?: string;
};
export default function LogoFull(props: LogoFullProps) {
  const { className, ...restProps } = props;
  return (
    <motion.div
      {...restProps}
      className={className}
      style={{
        fontFamily: "inherit",
        fontWeight: 300,
        letterSpacing: "0.05em",
        ...restProps.style,
      }}
    >
      Krishna Prasath
    </motion.div>
  );
}
