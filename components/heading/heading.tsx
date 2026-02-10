"use client";

import { motion } from "framer-motion";

type Props = {
  isCenter?: boolean;
  title: string;
};

const Heading = ({ title, isCenter }: Props) => {
  return (
    <div className="w-fit relative">
      <h2
        className={`
          uppercase text-xl md:text-3xl lg:text-4xl font-serif font-semibold
          ${isCenter ? "text-center mx-auto" : ""}
        `}
      >
        {title}
      </h2>

      {/* Luxury animated underline */}
      <motion.span
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`
          absolute -bottom-2 h-[4px] bg-[var(--main)]
          ${isCenter ? "left-1/2 -translate-x-1/2" : "left-0"}
        `}
      />
    </div>
  );
};

export default Heading;
