import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';

interface BookStepProps {
  id: number;
  image: StaticImageData;
  title: string;
}

const text = {
  hidden: { x: -800 },
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const BookStep: React.FC<BookStepProps> = (props) => {
  const { title, image } = props;
  return (
    <motion.div
      className="flex font-poppins xl:mb-12 xs:mb-8 xl:w-[415px] lg:w-80"
      variants={text}
    >
      <div className=" flex items-start xs:w-14 md:w-24 md:mr-8 xs:mr-4">
        <Image src={image} alt={title} className="w-full" />
      </div>
      <div className="flex flex-col text-paragraph">
        <span className="lg:text-base xs:text-sm font-bold mb-0.5">
          {title}
        </span>
        <span className="xl:text-base xs:text-sm leading-5 font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.
        </span>
      </div>
    </motion.div>
  );
};

export default BookStep;
