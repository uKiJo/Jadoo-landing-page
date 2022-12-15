import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Card from '../card/Card';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import data from './data';

interface DestinationsProps {}

const container = {
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Destinations: React.FC<DestinationsProps> = (props) => {
  const sectionRef = useRef(null);
  return (
    <section
      ref={sectionRef}
      className="md:w-3/4 mx-auto text-center items-center mb-32"
    >
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        whileInView={{ x: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Subtitle>Top Selling</Subtitle>
      </motion.div>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Title>Top Destinations</Title>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="lg:flex lg:flex-row lg:justify-between sm:gap-14 lg:gap-10 w-fit mx-auto sm:grid sm:grid-cols-2 xs:flex xs:flex-col xs:items-center bg2"
      >
        {data.map((dest) => (
          <Card key={dest.id} {...dest} />
        ))}
      </motion.div>
    </section>
  );
};

export default Destinations;
