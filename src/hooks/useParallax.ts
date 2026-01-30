import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxConfig {
  offset?: [string, string];
  speed?: number;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { offset = ["start end", "end start"], speed = 0.5 } = config;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { ref, y, opacity, scale, scrollYProgress };
};

export const useMultiSpeedParallax = () => {
  const { scrollYProgress } = useScroll();
  
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const mediumY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  
  return { slowY, mediumY, fastY, scrollYProgress };
};
