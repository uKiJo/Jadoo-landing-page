import Image from 'next/image';
import React from 'react';
import CustomButton from '../shared/CustomButton';
import heroImage from '../../public/Group 590.svg';

import { RiPlayCircleFill } from 'react-icons/ri';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center w-4/5 mx-auto mb-24">
      <div className="font-poppins flex flex-col justify-center">
        <h2 className="text-heading1 font-bold uppercase mb-6">
          Best Destinations around the world
        </h2>
        <span className="font-volkhov text-xl xl:text-6xl lg:text-4xl xl:w-[545px] lg:w-96 font-bold text-heading2 block mb-7">
          Travel, <span className="enjoy">enjoy</span> and live a new and full
          life
        </span>
        <p className="text-paragraph text-base font-normal block xl:w-[477px] lg:w-96 mb-8">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="flex">
          <CustomButton styling="bg-yellow py-4 px-6 rounded-lg text-sm text-white mr-8 find-btn">
            Find out more
          </CustomButton>
          <div className="flex items-center cursor-pointer">
            <RiPlayCircleFill
              className="fill-heading1 mr-4 play-btn"
              size={52}
            />
            <span className="text-paragraph font-medium">Play Demo</span>
          </div>
        </div>
      </div>
      <div className="ml-12">
        <Image width={500} src={heroImage} alt="hero-image" />
      </div>
    </header>
  );
};

export default Header;
