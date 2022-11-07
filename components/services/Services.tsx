import React from 'react';

interface ServicesProps {}

const Services: React.FC<ServicesProps> = (props) => {
  return (
    <section className="text-center">
      <h2 className="font-poppins text-paragraph">Category</h2>
      <span className="font-volkhov text-5xl text-heading2">
        We Offer Best Services
      </span>
    </section>
  );
};

export default Services;
