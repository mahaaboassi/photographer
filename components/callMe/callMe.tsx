"use client";

import { motion, AnimatePresence } from "framer-motion";

const CallMeMobile = ({ show = true }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="sm:hidden fixed bottom-0 right-0 left-0 z-[200]"
        >
          <button className="w-full !p-3 text-md bg-[var(--main)] text-[var(--light)]">
            Call Me
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CallMeMobile;
