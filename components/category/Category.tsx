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
    <div className="lg:w-64 lg:h-80 xs:w-56 xs:h-72 flex flex-col items-center rounded-3xl box-shadow md:mb-12 xs:mb-6 transition cursor-pointer">
      <Image className="m-6 h-20" src={image} alt={title} />
      <h1 className="font-google font-bold lg:text-xl md:text-lg text-primary mb-8">
        {title}
      </h1>
      <p className="font-poppins lg:text-base sm:text-sm text-paragraph lg:w-44 sm:w-36 xs:w-44">
        {details}
      </p>
    </div>
  );
};

export default Category;
