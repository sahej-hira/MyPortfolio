import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultTexts = [
  "Thoughtful design, crafted with care.",
  "Interfaces that feel effortless.",
  "Pixel-perfect components, built to scale.",
  "Accessible, responsive, and fast.",
  "Design systems that save time.",
  "Small details, big impact.",
];

const VerticalTextSlider = ({ items = defaultTexts, interval = 2500, inline = false, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  const MotionEl = inline ? motion.span : motion.p;

  return (
    <div className={`${inline ? "inline-flex items-baseline" : "h-14 overflow-hidden flex items-center justify-center"}`}>
      <AnimatePresence mode="wait">
        <MotionEl
          key={index}
          initial={{ y: inline ? 8 : 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: inline ? -8 : -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={className}
          style={{ color: 'var(--accent)' }}
        >
          {items[index]}
        </MotionEl>
      </AnimatePresence>
    </div>
  );
};

export default VerticalTextSlider;
