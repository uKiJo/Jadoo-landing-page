import React from 'react';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-volkhov xl:text-5xl lg:text-4xl md:text-3xl xs:text-4xl text-heading2 mb-16">
      {children}
    </h1>
  );
};

export default Title;
