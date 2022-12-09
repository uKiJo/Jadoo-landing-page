import React from 'react';
import Category from '../category/Category';
import Subtitle from '../shared/Subtitle';
import Title from '../shared/Title';

import data from './data';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <section className="md:w-3/4 mx-auto text-center mb-24 bg">
      <Subtitle>Category</Subtitle>
      <Title>We Offer Best Services</Title>
      <div className="flex flex-wrap sm:justify-between xs:justify-center">
        {data.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Services;
