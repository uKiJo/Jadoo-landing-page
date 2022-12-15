import React from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';

interface CategoryProps {
  image: string;
  title: string;
  details: string;
}

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
};

const Category: React.FC<CategoryProps> = (props) => {
  const { image, title, details } = props;
  return (
    <motion.div
      variants={item}
      className="lg:w-64 lg:h-80 xs:w-56 xs:h-72 flex flex-col items-center rounded-3xl  md:mb-12 xs:mb-6 box-shadow  cursor-pointer"
    >
      <Image className="m-6 h-20" src={image} alt={title} />
      <h1 className="font-google font-bold lg:text-xl md:text-lg text-primary mb-8">
        {title}
      </h1>
      <p className="font-poppins lg:text-base sm:text-sm text-paragraph lg:w-44 sm:w-36 xs:w-44">
        {details}
      </p>
    </motion.div>
  );
};

export default Category;
