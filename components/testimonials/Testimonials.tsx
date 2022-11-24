import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import reviews from './review-data';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

const Testimonials: React.FC = () => {
  // const [[activeImage, direction], setActiveImage] = useState([0, 0]);
  const [[active, next, direction], setActive] = React.useState([0, 1, 0]);
  const [isDisabled, setIsDisabled] = React.useState([false, false]);

  const ind = wrap(0, reviews.length, active);
  const nxt = wrap(0, reviews.length, next);

  console.log('active', ind);
  console.log('next', nxt);
  console.log('direction', direction);

  const paginate = (newDirection: number) => {
    setActive([active + newDirection, next + newDirection, newDirection]);
  };

  return (
    <section className="mb-48 lg:w-11/12 xl:w-4/5 mx-auto">
      <div className="grid lg:grid-cols-9 md:grid-cols-1 md:grid-rows-2 gap-4 md:auto-rows-min">
        <div className="lg:col-span-3 md:col-span-2">
          <Subtitle>Testimonials</Subtitle>
          <Title>What People Say About Us</Title>
          <div className="flex">
            {reviews.map((img, i) => (
              <motion.div key={i}>
                <GoPrimitiveDot
                  className={`mr-6 h-6 w-6 ${
                    ind === i ? 'fill-primary' : 'fill-slate-200'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative mb-4 lg:col-span-5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              // layout
              custom={direction}
              className="absolute z-10 w-full"
              variants={variants}
              transition={{ duration: 0.3 }}
              initial="enter"
              animate="center"
              exit="exit"
              key={ind}
            >
              {/* <div className="relative lg:w-4/5"> */}
              <Image
                className="absolute z-10"
                src={reviews[ind].avatar}
                alt={ind.toString()}
              />
              <Image
                className="card-shadow rounded-lg absolute top-10 left-10"
                src={reviews[ind].message}
                alt={ind.toString()}
              />
              {/* </div> */}
            </motion.div>
            {/* <motion.div
              // layout
              // transition={{ duration: 0.3 }}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              className="absolute 2xl:top-28 md:top-24 left-10 h-48 w-full"
              key={nxt}
            >
              {/* <div className="relative lg:w-4/5"> */}
            {/* <Image
              // className="border border-stroke"
              src={reviews[nxt].avatar}
              alt={active.toString()}
              className=""
            />
            <Image
              // className="border border-stroke"
              src={reviews[nxt].message}
              alt={active.toString()}
              className="border border-stroke rounded-lg absolute top-10 left-10"
            /> */}
            {/* </div> */}
            {/* </motion.div>  */}
          </AnimatePresence>
        </div>
        <div className=" flex flex-col justify-end relative z-10">
          <button onClick={() => paginate(1)}>
            <BsChevronUp className="mb-14 p-1 h-8 w-8 fill-paragraph" />
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
  center: { y: 0, opacity: 1 },
  exit: (direction: number) => {
    return { y: direction * -100, opacity: 0 };
  },
};

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default Testimonials;
