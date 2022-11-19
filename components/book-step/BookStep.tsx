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
    <div className="flex font-poppins mb-12 xl:w-[395px]">
      <div className="mr-6 flex justify-center">
        <Image src={image} alt={title} width={90} />
      </div>
      <div className="flex flex-col text-paragraph">
        <span className="lg:text-base xs:text-sm  font-bold mb-0.5">
          {title}
        </span>
        <span className="lg:text-base xs:text-sm leading-5 font-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
          tempus.
        </span>
      </div>
    </div>
  );
};

export default BookStep;
