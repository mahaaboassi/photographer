"use client";

import Heading from "@/components/heading/heading";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "@/components/arrow/arrow";

const Gallery = () => {
  const imagesFirstLine = [
    "/images/image_1.png",
    "/images/image_2.png",
    "/images/image_3.png",
    "/images/image_4.png",
    "/images/image_5.png",
    "/images/image_6.png",
  ];

  const imagesSecondLine = [
    "/images/image_4.png",
    "/images/image_5.png",
    "/images/image_6.png",
    "/images/image_1.png",
    "/images/image_2.png",
    "/images/image_3.png",
  ];

  const [firstImagesLine, setFirstImagesLine] = useState([
    "/images/image_1.png",
    "/images/image_2.png",
    "/images/image_3.png",
  ]);

  const [secondImagesLine, setSecondImagesLine] = useState([
    "/images/image_4.png",
    "/images/image_5.png",
    "/images/image_6.png",
  ]);

  const [firstIndex, setFirstIndex] = useState(3);
  const [secondIndex, setSecondIndex] = useState(3);

  const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const clickFirst = () => {
    let temp: string[] = [];

    if (imagesFirstLine.length <= firstIndex) {
      setFirstIndex(3);
      for (let i = 0; i < 3; i++) temp.push(imagesFirstLine[i]);
    } else {
      for (let i = firstIndex; i < firstIndex + 3; i++) temp.push(imagesFirstLine[i]);
      setFirstIndex((prev) => prev + 3);
    }

    setFirstImagesLine(temp);
  };

  const clickSecond = () => {
    let temp: string[] = [];
    if (imagesSecondLine.length <= secondIndex) {
      setSecondIndex(3);
      for (let i = 0; i < 3; i++) temp.push(imagesSecondLine[i]);
    } else {
      for (let i = secondIndex; i < secondIndex + 3; i++) temp.push(imagesSecondLine[i]);
      setSecondIndex((prev) => prev + 3);
    }

    setSecondImagesLine(temp);
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-center">
        <Heading isCenter={true} title="LATEST WORK" />
      </div>

      <div className="flex flex-col gap-5">
        {/* First Line */}
        <div className="grid grid-cols-5">
          <div className="col-span-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={firstIndex}
                variants={fade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex gap-5 whitespace-nowrap"
              >
                {firstImagesLine.map((ele, idx) => (
                  <div key={`gallery_Image_${idx}`}>
                    <Image src={ele} width={400} height={200} alt="gallery" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <button
              onClick={clickFirst}
              className="!p-0 cursor-pointer"
              aria-label="Next in First line "
            >
              <Arrow isRotate={false} />
            </button>
          </div>
        </div>

        {/* Second Line */}
        <div className="grid grid-cols-5">
          <div className="col-span-1 flex justify-center items-center">
            <button
              onClick={clickSecond}
              className="!p-0 cursor-pointer"
              aria-label="Next in Second line "
            >
              <Arrow isRotate={true} />
            </button>
          </div>

          <div className="col-span-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={secondIndex}
                variants={fade}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex gap-5 whitespace-nowrap"
              >
                {secondImagesLine.map((ele, idx) => (
                  <div key={`gallery_Image_Second_${idx}`}>
                    <Image src={ele} width={400} height={200} alt="gallery" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;