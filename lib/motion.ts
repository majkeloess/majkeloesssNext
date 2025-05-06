const animations = {
  navVariants: {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  },

  listItem: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },

  listItemDown: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },

  parentList: {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  },
}

export default animations
