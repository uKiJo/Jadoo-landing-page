import React from 'react';
import Card from '../card/Card';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import data from './data';

interface DestinationsProps {}

const Destinations: React.FC<DestinationsProps> = (props) => {
  return (
    <section className="flex flex-col items-center">
      <Subtitle>Top Selling</Subtitle>
      <Title>Top Destinations</Title>
      <div className="flex ">
        {data.map((dest) => (
          <Card key={dest.id} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
