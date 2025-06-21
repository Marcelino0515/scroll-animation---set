// components/FadeInSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export default function FadeInSection({ children, fadey = "", fadex = "", distance = 50, duration = 1, className = "" }: { children: React.ReactNode, fadey?: string, fadex?: string, distance?: number, duration?: number, className: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false }); // triggers once
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: duration, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: (fadey == "") ? 0 : (fadey == 'up' ? distance : (fadey == 'down' ? -distance : "")), x: (fadex == "") ? 0 : (fadex == 'left' ? distance : (fadex == 'right' ? -distance : "")) },
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
