import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FadeInVariants } from "@/components/utils/variants";
import { useEffect } from "react";

const ScrollAnimation = ({ children, ...rest }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const animation = useAnimation();
  const { delay_time, trigger } = rest;

  useEffect(() => {
    if (trigger != null) {
      return;
    }
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  useEffect(() => {
    if (trigger) {
      animation.start("hidden");
      animation.start("visible");
    }
  }, [trigger]);
  return (
    <motion.section variants={FadeInVariants(delay_time ?? 0.1)} initial="hidden" animate={animation} ref={ref}>
      {children}
    </motion.section>
  );
};

export default ScrollAnimation;
