import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface BookStepProps {
  id: number;
  image: StaticImageData;
  title: string;
}

const BookStep: React.FC<BookStepProps> = (props) => {
  const { title, image } = props;
  return (
    <div className="flex font-poppins xl:mb-12 sm:mb-8 xl:w-[415px] lg:w-72">
      <div className=" flex items-start lg:w-40 sm:w-32 sm:mr-4">
        <Image src={image} alt={title} />
      </div>
      <div className="flex flex-col text-paragraph">
        <span className="lg:text-base xs:text-sm font-bold mb-0.5">
          {title}
        </span>
        <span className="xl:text-base xs:text-sm leading-5 font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.
        </span>
      </div>
    </div>
  );
};

export default BookStep;
