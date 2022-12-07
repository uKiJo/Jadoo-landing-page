import React from 'react';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-volkhov xl:text-5xl lg:text-4xl xs:text-3xl text-heading2 lg:mb-20 sm:mb-16 xs:mb-8 break-normal">
      {children}
    </h1>
  );
};

export default Title;
