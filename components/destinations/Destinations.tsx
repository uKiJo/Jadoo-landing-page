import React from 'react';
import Card from '../card/Card';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import data from './data';

interface DestinationsProps {}

const Destinations: React.FC<DestinationsProps> = (props) => {
  return (
    <section className="md:w-3/4 mx-auto flex flex-col items-center mb-32">
      <Subtitle>Top Selling</Subtitle>
      <Title>Top Destinations</Title>
      <div className="lg:flex lg:flex-row lg:justify-between sm:grid sm:grid-cols-2 xs:flex xs:flex-col xs:items-center w-full bg2">
        {data.map((dest) => (
          <Card key={dest.id} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
