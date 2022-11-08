import React from 'react';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-volkhov text-5xl text-heading2 mb-16">{children}</h1>
  );
};

export default Title;
