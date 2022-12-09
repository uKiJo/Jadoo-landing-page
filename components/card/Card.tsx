import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { TiLocationArrow } from 'react-icons/ti';

interface CardProps {
  image: StaticImageData;
  place: string;
  price: number;
  day: number;
}

const Card: React.FC<CardProps> = (props) => {
  const { image, place, price, day } = props;
  return (
    <div className="justify-self-center flex flex-col 2xl:h-[500px] 2xl:w-[300px] xl:h-[410px] lg:h-96 lg:w-64 sm:w-52 sm:h-80 xs:w-64 xs:h-96 xs:mb-16 lg:mr-12 md:mr-6 sm:mr-12 rounded-3xl card-shadow font-poppins text-paragraph">
      <div className="h-[73%] overflow-hidden">
        <Image className="w-full object-cover" src={image} alt={place} />
      </div>
      <div className="flex flex-col font-medium justify-center grow p-6">
        <div className="mb-4 flex justify-between lg:text-base sm:text-base">
          <span>{place}</span>
          <span>${price}k</span>
        </div>
        <div className="flex items-center">
          <TiLocationArrow color="black" size={30} />
          <span className="lg:text-base sm:text-sm ml-2">{day} Days Trip</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
