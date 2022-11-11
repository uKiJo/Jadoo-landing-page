import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import reviewData from './review-data';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

const Testimonials: React.FC = () => {
  // const [[activeImage, direction], setActiveImage] = useState([0, 0]);
  const [[active, next, direction], setActive] = React.useState([0, 1, 0]);
  const [isDisabled, setIsDisabled] = React.useState([false, false]);

  const ind = wrap(0, reviewData.length, active);
  const nxt = wrap(0, reviewData.length, next);

  // const imageIndex = wrap(0, reviewData.length, activeImage);
  // const prevIndex = wrap(0, reviewData.length, activeImage + 1);

  console.log('active', ind);
  console.log('next', nxt);
  console.log('direction', direction);

  const paginate = (newDirection: number) => {
    setActive([active + newDirection, next + newDirection, +newDirection]);
  };

  return (
    <section className="mb-48 p-48 overflow-hidden">
      <div className="flex justify-evenly">
        <div className="w-[409px]">
          <Subtitle>Testimonials</Subtitle>
          <Title>What People Say About Us</Title>
          <div className="flex">
            {reviewData.map((img, i) => (
              <GoPrimitiveDot
                key={i}
                className={`mr-6 h-6 w-6 ${
                  ind === i ? 'fill-primary' : 'fill-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex relative  basis-1/3 mb-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              layout
              // variants={variants}
              custom={direction}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -100 }}
              // initial="enter"
              // animate="center"
              // exit="exit"
              // transition={{ duration: 0.5 }}
              className="absolute z-10"
              key={ind}
            >
              <Image
                className="card-shadow"
                src={reviewData[ind]}
                alt={ind.toString()}
              />
            </motion.div>
            <motion.div
              layout
              variants={variants2}
              custom={direction}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-28 left-10"
              key={nxt}
            >
              <Image
                // className="border border-stroke"
                src={reviewData[nxt]}
                alt={active.toString()}
                className="bg-heading1 rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className=" flex flex-col justify-center">
          <button onClick={() => paginate(1)}>
            <BsChevronUp className="mb-14 p-1 h-8 w-8  fill-paragraph" />
          </button>
          <button onClick={() => paginate(-1)}>
            <BsChevronDown className="p-1 h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

let variants = {
  enter: (direction: number) => {
    return { y: direction * 100, opacity: 0 };
  },
  center: { y: 0, x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { y: direction * -100, opacity: 0 };
  },
};

let variants2 = {
  enter: { y: 0, opacity: 0.2 },

  center: (direction: number) => {
    return { y: direction > 0 ? -50 : 50, opacity: 1 };
  },
  exit: (direction: number) => {
    return { y: direction * -100, opacity: 0 };
  },
};
export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default Testimonials;
