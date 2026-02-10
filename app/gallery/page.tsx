"use client";

import Heading from "@/components/heading/heading";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const images = Array.from({ length: 30 }, (_, i) => `/images/gallery (${i + 1}).png`);

const Gallery = () => {
  const fadeUp: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <main className="bg-[var(--primary)] text-white flex flex-col">
      {/* Hero Section */}
      <div
        className="h-[500px] relative bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-gallery.jpg')" }}
      >
        <div className="absolute inset-0 z-1 flex flex-col justify-center items-center gap-6 ">
            <Heading title="My Gallery" isCenter />
            <p className="max-w-2xl text-center text-[var(--grey-2)] px-4 sm:px-10">
            A curated collection of moments captured through my lens. Every image has its own story of elegance, love, and beauty.
            </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)/70] to-transparent">

        </div>
      </div>

      {/* Masonry Grid */}
      <div className="relative z-10 -mt-10 px-4 sm:px-10 md:px-20 py-20 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[10px]">
        {images.map((img, idx) => {
          // Random height multiplier but controlled for luxury feel
          const rowSpan = Math.floor(Math.random() * 4) + 9; // 4-7 rows
          
          return (
            <motion.div
              key={idx}
              className="overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] relative transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
              style={{ gridRowEnd: `span ${rowSpan}` }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <Image
                src={img}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover w-full h-full"
              />
            </motion.div>
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
