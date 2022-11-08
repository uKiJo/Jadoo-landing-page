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
    <div className="flex flex-col h-[457px] w-80 mb-4 mr-10 rounded-3xl card-shadow font-poppins text-paragraph">
      <div className="h-[73%] overflow-hidden">
        <Image className="w-full object-cover" src={image} alt={place} />
      </div>
      <div className="flex flex-col justify-center grow p-4">
        <div className="mb-4 font-medium flex justify-between">
          <span>{place}</span>
          <span>${price}k</span>
        </div>
        <div className="flex items-center">
          <TiLocationArrow color="black" size={30} />
          <span className="text-base ml-2">{day} Days Trip</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
