import React from 'react';
import Image from 'next/image';

interface CategoryProps {
  image: string;
  title: string;
  details: string;
}

const Category: React.FC<CategoryProps> = (props) => {
  const { image, title, details } = props;
  return (
    <div className="w-64 h-80 mr-8 flex flex-col items-center rounded-3xl box-shadow mb-12 transition cursor-pointer">
      <Image className="m-6" src={image} alt={title} />
      <h1 className="font-google text-xl text-primary mb-8"> {title} </h1>
      <p className="font-poppins text-base text-paragraph w-44"> {details}</p>
    </div>
  );
};

export default Category;
