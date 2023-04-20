export const FadeInVariants = (delay) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
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
