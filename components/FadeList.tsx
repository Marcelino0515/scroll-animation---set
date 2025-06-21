'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // Delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function FadeList() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('show');
  }, [inView, controls]);

  return (
    <motion.ul
      className="space-y-4"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {[...Array(5)].map((_, i) => (
        <motion.li
          key={i}
          variants={itemVariants}
          className="p-4 bg-gray-100 rounded-lg shadow"
        >
          Item {i + 1}
        </motion.li>
      ))}
    </motion.ul>
  );
}
