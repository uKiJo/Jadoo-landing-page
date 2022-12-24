import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';

import { TiLocationArrow } from 'react-icons/ti';
import { useParallax } from '../shared/hooks/useParallax';

interface CardProps {
  image: StaticImageData;
  place: string;
  price: number;
  day: number;
}

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
};

const Card: React.FC<CardProps> = (props) => {
  const { image, place, price, day } = props;
  const CardRef = useRef(null);
  const y = useParallax(CardRef);

  return (
    <motion.div
      style={{ y: y }}
      ref={CardRef}
      variants={item}
      transition={{ duration: 1 }}
      className="justify-self-center flex flex-col 2xl:h-[500px] 2xl:w-[300px] xl:h-[410px] lg:h-96 lg:w-64 sm:w-52 sm:h-80 xs:w-64 xs:h-96 xs:mb-16 sm:mb-0 rounded-3xl shadow-card font-poppins text-paragraph lg:last:mr-12"
    >
      <div className="h-[73%] overflow-hidden">
        <Image className="w-full object-cover" src={image} alt={place} />
      </div>
      <div className="flex flex-col font-medium justify-center grow p-6">
        <div className="mb-4 flex justify-between lg:text-base sm:text-base">
          <span>{place}</span>
          <span>${price}k</span>
        </div>
        <div className="flex items-center">
          <TiLocationArrow color="black" size={30} />
          <span className="lg:text-base sm:text-sm ml-2">{day} Days Trip</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
