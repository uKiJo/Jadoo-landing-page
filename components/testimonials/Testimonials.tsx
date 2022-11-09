import Image from 'next/image';
import React, { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import reviewData from './review-data';

import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import elvira from './assets/elvira.png';
import mike from './assets/mike.png';
import yoko from './assets/yoko.png';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

const Testimonials: React.FC = () => {
  const [activeImage, setActiveImage] = useState(0);

  const imageIndex = wrap(0, reviewData.length, activeImage);
  console.log(imageIndex);
  return (
    <section className="mb-48">
      <div className="flex justify-center">
        <div className="w-[409px]">
          <Subtitle>Testimonials</Subtitle>
          <Title>What People Say About Us</Title>
          <div className="flex">
            {reviewData.map((img, i) => (
              <GoPrimitiveDot
                key={i}
                className={`${
                  imageIndex === i ? 'fill-primary' : 'fill-slate-200'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex relative  basis-1/2 mb-4">
          <AnimatePresence>
            <motion.div
              initial={{ y: 541, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -541, opacity: 0 }}
              className="absolute"
              key={activeImage}
            >
              <Image
                className="card-shadow"
                src={reviewData[imageIndex]}
                alt={activeImage.toString()}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="h-min flex flex-col">
          <button onClick={() => setActiveImage(activeImage + 1)}>
            <BsChevronUp className="mb-14 p-1 h-8 w-8  fill-paragraph" />
          </button>
          <button onClick={() => setActiveImage(activeImage - 1)}>
            <BsChevronDown className="p-1 h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default Testimonials;
