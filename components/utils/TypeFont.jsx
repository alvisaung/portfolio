import { motion, useAnimation } from "framer-motion";

const TypeFont = (children) => {
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const SplitTxt = (texts) => {
    return texts.split("").map((txt, i) => (
      <motion.span key={i} variants={wordVariants}>
        {txt}
      </motion.span>
    ));
  };

  return <>{SplitTxt(children)}</>;
};

export default TypeFont;
