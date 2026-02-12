"use client";

import Heading from "@/components/heading/heading";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Arrow from "@/components/arrow/arrow";
import Popup from "@/components/popup/popup";

/* ---------------- animations ---------------- */

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

/* ---------------- overlay (FIXED) ---------------- */

const Overlay = ({ onClick }: { onClick: () => void }) => (
  <div
    onClick={onClick}
    className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--overlay)]
               opacity-0 group-hover:opacity-100
               transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
               cursor-pointer"
  >
    {/* top line */}
    <div
      className="h-[2px] bg-[var(--main)] left-0 absolute top-5 w-0
                 group-hover:w-3/4
                 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    />

    {/* icon */}
    <div
      className="text-[var(--light)] opacity-0 scale-75
                 group-hover:opacity-100 group-hover:scale-100
                 transition-all duration-500 delay-150
                 ease-[cubic-bezier(0.22,1,0.36,1)]"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 22 14" fill="none">
        <path
          d="M17.1392 1.8064C19.0244 2.99117 20.6483 4.709 21.88 6.79613L22 7L21.88 7.2022C20.6483 9.28933 19.0226 11.0072 17.1392 12.1919C15.3005 13.3483 13.2129 14 11 14C8.78711 14 6.69954 13.3483 4.86263 12.1936C2.97559 11.0072 1.35173 9.28933 0.119954 7.2022L0 7L0.119954 6.79613C1.35173 4.709 2.97559 2.99117 4.86084 1.8064C6.69954 0.651707 8.78711 0 11 0C13.2129 0 15.2987 0.651707 17.1392 1.8064ZM10.8836 3.7047C8.77637 3.7047 7.06836 5.29888 7.06836 7.26402C7.06836 9.23084 8.77637 10.825 10.8836 10.825C12.9909 10.825 14.6989 9.23084 14.6989 7.26402C14.6989 5.29888 12.9909 3.7047 10.8836 3.7047Z"
          fill="currentColor"
        />
      </svg>
    </div>

    {/* bottom line */}
    <div
      className="h-[2px] bg-[var(--main)] right-0 absolute bottom-5 w-0
                 group-hover:w-3/4
                 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    />
  </div>
);

/* ---------------- gallery row ---------------- */

const GalleryRow = ({
  images,
  visible,
  index,
  onNext,
  onOpen,
  reverse,
}: {
  images: string[];
  visible: string[];
  index: number;
  onNext: () => void;
  onOpen: (img: string, arr: string[]) => void;
  reverse?: boolean;
}) => (
  <div className="grid grid-cols-5 overflow-hidden  lg:h-[280px] xl:h-[300px]">
    {reverse && (
      <div className="col-span-1 flex items-center justify-center">
        <button onClick={onNext} className="!p-0 cursor-pointer" aria-label="Next">
          <Arrow isRotate />
        </button>
      </div>
    )}

    <div className="col-span-4 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex gap-5 whitespace-nowrap"
        >
          {visible.map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              variants={fadeItem}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 group relative overflow-hidden"
            >
              {/* IMAGE */}
              <Image
                src={img}
                width={400}
                height={200}
                alt="gallery"
                className="w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />

              {/* OVERLAY ABOVE IMAGE */}
              <Overlay onClick={() => onOpen(img, images)} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>

    {!reverse && (
      <div className="col-span-1 flex items-center justify-center">
        <button onClick={onNext} className="!p-0 cursor-pointer" aria-label="Next">
          <Arrow />
        </button>
      </div>
    )}
  </div>
);

/* ---------------- main gallery ---------------- */

const Gallery = () => {
  const imagesFirst = Array.from({ length: 15 }, (_, i) => `/images/gallery (${i + 1}).jpg`);
  const imagesSecond = Array.from({ length: 15 }, (_, i) => `/images/gallery (${i + 16}).jpg`);

  const [firstIndex, setFirstIndex] = useState(3);
  const [secondIndex, setSecondIndex] = useState(3);

  const firstVisible = imagesFirst.slice(firstIndex - 3, firstIndex);
  const secondVisible = imagesSecond.slice(secondIndex - 3, secondIndex);

  const next = (setter: any, idx: number, arr: string[]) =>
    setter(idx + 3 > arr.length ? 3 : idx + 3);

  /* popup state */
  const [open, setOpen] = useState(false);
  const [popupIdx, setPopupIdx] = useState(0);
  const [popupArr, setPopupArr] = useState<string[]>([]);

  const openPopup = (img: string, arr: string[]) => {
    setPopupArr(arr);
    setPopupIdx(arr.indexOf(img));
    setOpen(true);
  };

  const navPopup = (dir: number) =>
    setPopupIdx((p) => (p + dir + popupArr.length) % popupArr.length);

  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-center">
        <Heading isCenter title="LATEST WORK" />
      </div>

      <div className="flex flex-col gap-5">
        <GalleryRow
          images={imagesFirst}
          visible={firstVisible}
          index={firstIndex}
          onNext={() => next(setFirstIndex, firstIndex, imagesFirst)}
          onOpen={openPopup}
        />

        <GalleryRow
          images={imagesSecond}
          visible={secondVisible}
          index={secondIndex}
          onNext={() => next(setSecondIndex, secondIndex, imagesSecond)}
          onOpen={openPopup}
          reverse
        />
      </div>

      {open && (
        <Popup>
        <div className="flex flex-col items-center gap-5">
            <div className="flex w-full justify-end" >
              <div aria-label="Close" className="cursor-pointer" onClick={()=> setOpen(false)}  >
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 33 34" fill="none">
                  <g clipPath="url(#clip0_1_9039)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24.7314 1.46533C26.6157 -0.480993 29.679 -0.489571 31.574 1.44651C33.4676 3.38204 33.4758 6.52924 31.5925 8.4739L23.3247 17.0038L31.6012 25.5414C33.469 27.4722 33.4437 30.5995 31.5446 32.5273C29.645 34.4543 26.591 34.4493 24.7237 32.5187L16.5038 24.04L8.26835 32.5345C6.38399 34.4808 3.32066 34.4894 1.4257 32.5533C-0.467908 30.6178 -0.476341 27.4706 1.4072 25.5259L9.67502 16.996L1.39876 8.45813C-0.469268 6.52731 -0.443698 3.40003 1.45535 1.47224C3.35493 -0.45443 6.40902 -0.449726 8.27624 1.48082L16.4962 9.95979L24.7314 1.46533Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1_9039">
                  <rect width="33" height="34" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                </div>
            </div>
            <AnimatePresence mode="wait">
                       

              <motion.div key={popupIdx} variants={fadeItem} initial="initial" animate="animate" exit="exit">
                <Image
                  src={popupArr[popupIdx]}
                  width={600}
                  height={500}
                  alt="popup"
                  
                  className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-5">
              <button onClick={() => navPopup(-1)} className="!p-0" aria-label="Prev">
                <Arrow isRotate />
              </button>
              <button onClick={() => navPopup(1)} className="!p-0" aria-label="Next">
                <Arrow />
              </button>
            </div>
          </div>
        </Popup>
      )}
    </section>
  );
};

export default Gallery;