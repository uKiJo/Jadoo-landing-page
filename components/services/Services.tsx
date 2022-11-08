import React from 'react';
import Category from '../category/Category';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import data from './data';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <section className="text-center mb-24 bg">
      <Subtitle>Category</Subtitle>
      <Title>We Offer Best Services</Title>
      <div className="flex justify-center">
        {data.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Services;
