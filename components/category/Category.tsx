import React, { useEffect, useRef, RefObject } from 'react';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '../shared/hooks/useParallax';

interface CategoryProps {
  id: number;
  image: string;
  title: string;
  details: string;
  ref: RefObject<HTMLDivElement>;
}

const item = {
  hidden: { y: 100 },
  show: { y: 0 },
};

const Category: React.FC<CategoryProps> = (props, ref) => {
  const { image, title, details, id } = props;
  const cat = useRef(null);
  const y = useParallax(cat);
  // const { scrollYProgress } = useScroll({
  //   target: cat,
  //   offset: ['start start', 'end start'],
  // });
  // const y = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [0, -600 * (Math.random() * 4)]
  // );

  // useEffect(() => {
  //   return scrollYProgress.onChange((latest) => {
  //     console.log('Page scroll: ', latest);
  //     console.log('y: ', y.get());
  //   });
  // }, []);

  return (
    <motion.div
      ref={cat}
      style={{ y: y }}
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
