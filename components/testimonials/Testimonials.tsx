import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import reviews from './review-data';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';
import { useViewport } from './hooks';

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, viewport] = useViewport(ref);
  // const [containerHeight, setcontainerHeight] = useState(
  //   ref.current?.clientHeight
  // );
  // const [viewport, setViewport] = useState(0);
  const [[active, next, direction], setActive] = useState([0, 1, 0]);
  const [isDisabled, setIsDisabled] = useState([false, false]);

  const ind = wrap(0, reviews.length, active);
  const nxt = wrap(0, reviews.length, next);

  console.log(height, viewport);

  const paginate = (newDirection: number) => {
    setActive([active + newDirection, next + newDirection, newDirection]);
  };

  return (
    <section className="md:w-4/5 lg:w-3/4 mx-auto md:mb-32 xs:mb-12">
      <div
        className={`grid lg:grid-cols-8 xs:grid-cols-1 md:grid-rows-1 xs:grid-rows-[200px_auto] gap-4`}
      >
        <div className="lg:col-span-3 xs:col-span-2 justify-self-start xs:mb-12 lg:mb-0">
          <Subtitle>Testimonials</Subtitle>
          <Title>What People Say About Us</Title>
          <div className="flex justify-center">
            {reviews.map((_, i) => (
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
        <div className="flex justify-around mb-4 lg:col-span-5 xs:col-span-2">
          <AnimatePresence mode="popLayout" initial={false} custom={direction}>
            <motion.div
              layout
              ref={ref}
              custom={direction}
              className="relative xs:w-4/5 sm:w-3/4"
              variants={variants}
              transition={{ duration: 0.3 }}
              initial="enter"
              animate="center"
              exit="exit"
              key={ind}
            >
              <Image
                className={`absolute md:-top-8 md:-left-8 xs:-top-5 xs:-left-5 z-10 xs:w-10 md:w-16`}
                src={reviews[ind].avatar}
                alt={ind.toString()}
              />
              <Image
                className="rounded-lg xs:w-full img-shadow"
                src={reviews[ind].message}
                alt={ind.toString()}
              />
            </motion.div>
          </AnimatePresence>
          <div className="justify-end right-0 xs:top-10 flex flex-col justify-end z-10 sm:self-center xs:self-start justify-self-center w-fit">
            <button className="xs:mb-6 sm:mb-10" onClick={() => paginate(1)}>
              <BsChevronUp className="p-1 sm:h-8 sm:w-8 xs:h-6 xs:w-6 fill-paragraph" />
            </button>
            <button onClick={() => paginate(-1)}>
              <BsChevronDown className="p-1 sm:h-8 sm:w-8 xs:h-6 xs:w-6" />
            </button>
          </div>
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
