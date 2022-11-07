import React from 'react';
import Category from '../category/Category';

import data from './data';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <section className="text-center bg">
      <h2 className="font-poppins font-bold text-paragraph uppercase mb-4">
        Category
      </h2>
      <h1 className="font-volkhov text-5xl text-heading2 mb-16">
        We Offer Best Services
      </h1>
      <div className="flex justify-center">
        {data.map((category) => (
          <Category key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Services;
