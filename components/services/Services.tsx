import React from 'react';
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
  return (
    <section className="md:w-3/4 mx-auto text-center mb-32 pt-12 bg">
      <motion.div
        initial={{ x: 900 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Subtitle>Category</Subtitle>
      </motion.div>
      <motion.div
        initial={{ x: -900 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title>We Offer Best Services</Title>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-wrap md:justify-between xs:justify-around"
      >
        {data.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
