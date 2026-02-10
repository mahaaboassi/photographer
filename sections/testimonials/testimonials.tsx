"use client";

import { useEffect, useState } from "react";
import Arrow from "@/components/arrow/arrow";
import Heading from "@/components/heading/heading";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Testimonals = () => {
  const data = [
    {
      image: "/images/profile_4.jpg",
      name: "Maha Abo Assi",
      passion: "Model",
      rate: 5,
      review:
        "I honestly couldn’t have asked for a better photographer for our wedding day. Every special moment was captured beautifully and naturally without feeling forced. The team was extremely professional, friendly, and very patient with us and our families. The final photos were delivered on time and the quality was beyond what we expected. Looking at the album brings back every emotion from that day. I highly recommend this service to anyone looking for unforgettable memories."
    },
    {
      image: "/images/profile_1.jpg",
      name: "Rumi Mahmoud",
      passion: "Wedding Client",
      rate: 4,
      review:
        "The photoshoot experience was smooth, comfortable, and very well organized from start to finish. I felt confident during the session thanks to the clear guidance and creative direction. The editing style was elegant and natural, which is exactly what I was hoping for. Communication was easy and professional throughout the whole process. I would definitely love to collaborate again on future projects."
    },
    {
      image: "/images/profile_3.jpg",
      name: "Omar Hassan",
      passion: "Business Owner",
      rate: 5,
      review:
        "Working together on our commercial product photography was one of the best decisions for our brand. The attention to detail, lighting quality, and overall presentation made our products look premium and professional. Since using the new images in our marketing, we’ve noticed a clear improvement in customer engagement and trust. The delivery was fast, organized, and exceeded our expectations in every way."
    },
    {
      image: "/images/profile_2.jpg",
      name: "Lina Youssef",
      passion: "Event Client",
      rate: 5,
      review:
        "All the important moments of our event were captured perfectly with creativity and precision. What I appreciated most was the calm and professional attitude during a very busy day. Nothing felt missed, and the final gallery told the full story of the celebration in a beautiful way. Friends and family were truly impressed with the results. I would absolutely recommend this photography service for any special occasion."
    }
  ];

  const [index, setIndex] = useState(0);

  // autoplay every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  const next = () => setIndex((prev) => (prev + 1) % data.length);
  const prev = () => setIndex((prev) => (prev - 1 + data.length) % data.length);

  const item = data[index];

  return (
    <section className="p-5 sm:px-10 md:px-20 py-16 flex flex-col items-center gap-8 ">
      <Heading isCenter={true} title="Testimonials" />

      <div className="w-full max-w-3xl relative">
        {/* Slider Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shadow-lg">
              <Image
                className="h-full w-full object-cover"
                width={400}
                height={400}
                alt={item.name}
                src={item.image}
              />
            </div>

            <h3 className="text-2xl font-serif font-semibold text-[var(--main)]">
              {item.name}
            </h3>

            <h4 className="font-medium text-gray-500">{item.passion}</h4>

            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < item.rate ? "text-yellow-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>

            <p className="text-xs md:text-sm lg:text-lg max-w-xl text-gray-600 leading-relaxed">
              {item.review}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute !p-0 left-0 !top-1/2 !-translate-y-1/2"
          aria-label="Previous testimonial"
        >
          <Arrow isRotate={true} />
        </button>

        <button
          onClick={next}
          className="absolute !p-0 right-0 top-1/2 -translate-y-1/2"
          aria-label="Next testimonial"
        >
          <Arrow isRotate={false} />
        </button>
      </div>
    </section>
  );
};

export default Testimonals;