import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time (standard for hero portfolio feel)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
        >
          <div className="spinner-container">
            <svg viewBox="0 0 100 100" className="styled-spinner">
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="2" stroke="var(--red-light)" strokeDasharray="20 10" />
              <motion.circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                strokeWidth="8"
                stroke="var(--red-accent)"
                strokeDasharray="50 150"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.path
                d="M50 20 L50 40 M50 60 L50 80 M20 50 L40 50 M60 50 L80 50"
                stroke="var(--red-dark)"
                strokeWidth="2"
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ originX: '30px', originY: '30px' }}
              />
            </svg>
            <motion.div
              className="loading-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Tominiyi<span>.Ay</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
