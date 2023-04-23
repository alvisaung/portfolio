export const FadeInVariants = (delay) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: delay,
        ease: "easeInOut",
        // scale: {
        //   type: "spring",
        //   damping: 10,
        //   stiffness: 100,
        // },
      },
    },
    hidden: { opacity: 0 },
  };
};
