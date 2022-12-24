import React, { useRef, RefObject } from 'react';
import Category from '../category/Category';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import { motion } from 'framer-motion';

import data from './data';

const container = {
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Services: React.FC = () => {
  const first = useRef(null);

  return (
    <section className="md:w-3/4 mx-auto text-center mb-32 pt-12 bg">
      <motion.div
        ref={first}
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Subtitle>Category</Subtitle>
      </motion.div>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title>We Offer Best Services</Title>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap md:justify-between xs:justify-around"
      >
        {data.map((category) => (
          <Category key={category.id} {...category} ref={first} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
