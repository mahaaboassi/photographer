"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const data = [
    { name: "Home", link: "/" },
    { name: "Gallery", link: "/gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.9)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(8px)" : "blur(0px)",
        paddingTop: scrolled ? "0px" : "20px",
        paddingBottom: scrolled ? "0px" : "20px",
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-20"
    >
      <div className="flex items-center justify-between">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: scrolled ? 0.8 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            width={150}
            height={100}
            src="/logo.png"
            alt="logo"
            className="w-[80px] md:w-[100px] lg:w-[120px] h-fit"
          />
        </motion.div>

        {/* Navbar Links */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5 uppercase font-serif text-sm sm:text-lg md:text-xl font-bold">
          {data.map((ele, idx) => (
            <motion.div
              key={`Navbar_${ele.name}_${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={ele.link} className="text-[var(--light)]">
                {ele.name}
              </Link>
            </motion.div>
            
          ))}
            <motion.div
              className="sm:flex hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 3* 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="!text-sm md:!text-md">Book Now</button>
            </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
