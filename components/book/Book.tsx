import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import BookStep from "../book-step/BookStep";
import { useParallax } from "../shared/hooks/useParallax";
import Subtitle from "../shared/Subtitle";
import Title from "../shared/Title";

import image1 from "./assets/image1.svg";
import image2 from "./assets/image2.svg";

import data from "./data";

interface BookProps {}

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
  show: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Book: React.FC<BookProps> = (props) => {
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const bookStepRef = useRef(null);
  const titleY = useParallax(titleRef);
  const imageY = useParallax(imageRef);
  const bookStepY = useParallax(bookStepRef);
  return (
    <section className="md:grid md:grid-cols-2 md:grid-rows-[h-fit] xs:flex xs:flex-col xs:justify-center mb-32 md:w-4/5 lg:w-3/4 mx-auto ">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="xl:w-[511px] lg:w-[450px] md:w-full md:col-start-1 md:col-span-2 lg:col-start-1 lg:col-end-2">
          <motion.div variants={text}>
            <Subtitle>Easy and Fast</Subtitle>
          </motion.div>
          <motion.div style={{ y: titleY }} ref={titleRef} variants={text}>
            <Title>Book your next trip in 3 easy steps</Title>
          </motion.div>
        </div>
        <motion.div
          style={{ y: bookStepY }}
          ref={bookStepRef}
          className="xl:w-[511px] md:w-11/12 xl:mr-28 md:mr-12 sm:w-4/5 sm:mb-8"
        >
          {data.map((book) => (
            <BookStep key={book.id} {...book} />
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        style={{ y: imageY }}
        ref={imageRef}
        className="md:self-center md:self-start xs:self-center justify-self-center relative md:w-2/3 sm:w-3/5 xs:w-4/5"
        initial={{ scale: 2.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="shadow-card rounded-3xl xs:w-4/5 sm:w-3/4 md:w-full xl:w-4/5"
          src={image1}
          alt="book-image"
        />
        <Image
          className="absolute top-1/2 left-1/2 shadow-card rounded-3xl xs:w-3/5 sm:w-1/2 md:w-2/3 xl:w-3/5"
          src={image2}
          alt="book-image"
        />
      </motion.div>
    </section>
  );
};

export default Book;
