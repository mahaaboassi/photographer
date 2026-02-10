"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BookNow = ({ show = true }) => {
  const pathname = usePathname();

  // Only show if parent says show AND path is NOT /book-session
  const shouldShow = show && pathname !== "/book-session";

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="sm:hidden fixed bottom-0 right-0 left-0 z-[200]"
        >
          <Link href={`/book-session`}>
            <button className="w-full !p-3 text-md bg-[var(--main)] text-[var(--light)]">
              Book Now
            </button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookNow;
