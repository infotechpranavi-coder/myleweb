export const easeOutExpo: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};
