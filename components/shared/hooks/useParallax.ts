import { useTransform, useScroll } from "framer-motion";
import { RefObject } from "react";

export const useParallax = (ref: RefObject<HTMLDivElement>) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -400 * (Math.random() * 4)]
  );

  return y;
};
