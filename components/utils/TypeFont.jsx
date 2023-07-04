import { motion, useAnimation } from "framer-motion";

const TypeFont = (children) => {
  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const SplitTxt = (texts) => {
    return texts.split("").map((txt, i) => (
      <motion.span key={i} variants={wordVariants}>
        {txt}
      </motion.span>
    ));
  };

  // return <>{SplitTxt(children)}</>;
  return (
    <>
      <motion.div variants={wordVariants} style={{ position: "relative" }}>
        {children}
      </motion.div>
    </>
  );
};

export default TypeFont;
