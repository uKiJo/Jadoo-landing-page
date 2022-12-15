import Image from 'next/image';
import React from 'react';
import CustomButton from '../shared/CustomButton';
import heroImage from '../../public/Traveller 1.svg';
import plane from '../../public/plane.svg';

import { RiPlayCircleFill } from 'react-icons/ri';
import { motion, useScroll, useTransform } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const text = {
  hidden: { x: -800 },
  show: { x: 0 },
};

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -600]);

  return (
    <header className="flex flex-col justify-center md:w-3/4 xs:w-full mx-auto mb-32">
      <div className="relative flex justify-between ">
        <motion.div
          style={{ y: y1 }}
          variants={container}
          initial="hidden"
          animate="show"
          className="font-poppins flex flex-col justify-start xl:w-[545px] lg:w-[420px] md:w-80 sm:w-64 "
        >
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h2
              variants={text}
              transition={{ duration: 1 }}
              className="text-heading1 font-bold uppercase lg:mb-6 sm:mb-4 xs:mb-6"
            >
              Best Destinations around the world
            </motion.h2>
            <motion.span
              variants={text}
              transition={{ duration: 1 }}
              className="font-volkhov xl:text-7xl xl:leading-[5rem] xl:tracking-[-.040em] lg:text-5xl sm:text-3xl xs:text-4xl font-bold text-heading2 block lg:mb-7 sm:mb-4 xs:mb-6"
            >
              Travel, <span className="enjoy ">enjoy</span> and live a new and
              full life
            </motion.span>
            <motion.p
              variants={text}
              transition={{ duration: 1 }}
              className="text-paragraph sm:text-sm lg:text-base font-normal block mb-8"
            >
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </motion.p>
          </motion.div>
          <div className="flex ">
            <motion.div variants={text} transition={{ duration: 1 }}>
              <CustomButton styling="bg-yellow lg:py-4 lg:px-6 xs:py-2 xs:px-4 rounded-lg text-sm text-white mr-8 find-btn">
                Find out more
              </CustomButton>
            </motion.div>
            <motion.div
              variants={text}
              transition={{ duration: 1 }}
              className="flex items-center cursor-pointer"
            >
              <RiPlayCircleFill
                className="fill-heading1 mr-4 play-btn"
                size={52}
              />
              <span className="text-paragraph font-medium">Play Demo</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="xl:w-1/2 lg:w-4/5 lg:ml-12 w-1/2 xs:hidden sm:block"
        >
          <Image src={heroImage} alt="hero-image" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -800, y: 800 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute right-0 lg:top-10 sm:top-0 -z-10"
        >
          <Image
            className="xs:hidden sm:block sm:w-28 xl:w-48"
            src={plane}
            alt="plane"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -800, y: 800 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-10 -z-10"
        >
          <Image
            className="xs:hidden sm:block sm:w-28 xl:w-48"
            src={plane}
            alt="plane"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
