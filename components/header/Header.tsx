import Image from 'next/image';
import React from 'react';
import CustomButton from '../shared/CustomButton';
import heroImage from '../../public/Group 590.svg';

import { RiPlayCircleFill } from 'react-icons/ri';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center md:w-4/5 xs:w-full mx-auto mb-24 xs:p-4">
      <div className="flex justify-between">
        <div className="font-poppins flex flex-col justify-start xl:w-[545px] lg:w-[420px] md:w-80 sm:w-64 ">
          <div>
            <h2 className="text-heading1 font-bold uppercase lg:mb-6 sm:mb-4 xs:mb-6">
              Best Destinations around the world
            </h2>
            <span className="font-volkhov xl:text-7xl xl:leading-[5rem] xl:tracking-[-.040em] lg:text-5xl sm:text-3xl xs:text-4xl font-bold text-heading2 block lg:mb-7 sm:mb-4 xs:mb-6">
              Travel, <span className="enjoy ">enjoy</span> and live a new and
              full life
            </span>
            <p className="text-paragraph sm:text-sm lg:text-base font-normal block mb-8">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
          </div>
          <div className="flex ">
            <CustomButton styling="bg-yellow lg:py-4 lg:px-6 xs:py-2 xs:px-4 rounded-lg text-sm text-white mr-8 find-btn">
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
        <div className="xl:w-1/2 lg:w-4/5 lg:ml-12 w-1/2 xs:hidden sm:block">
          <Image src={heroImage} alt="hero-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
