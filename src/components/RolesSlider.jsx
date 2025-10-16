import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RolesSlider = ({ items = [], interval = 2500, className = '' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  if (!items || items.length === 0) return null;

  return (
    <div className={`h-7 overflow-hidden flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-medium"
          style={{ color: 'var(--accent)' }}
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default RolesSlider;
