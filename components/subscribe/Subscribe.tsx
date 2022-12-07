import React from 'react';
import CustomButton from '../shared/CustomButton';

import { HiPaperAirplane } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <section className="flex justify-center mb-24 lg:h-[492px] md:h-96">
      <div className="w-section relative xs:w-11/12">
        <div className="absolute rounded-full p-4 gradient-one -top-5 -right-5 z-10 flex items-center">
          <HiPaperAirplane
            size={35}
            color="white"
            className=" origin-[60%_55%] rotate-[60deg]"
          />
        </div>

        <div className="lg:h-96 md:h-80 xs:h-64 xl:w-full bg-violet/[0.2] sm:rounded-tl-[129px] xs:rounded-tl-3xl rounded-bl-3xl rounded-r-3xl overflow-hidden background-circles z-10">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-poppins font-semibold lg:text-4xl md:text-3xl sm:text-xl xs:text-sm text-paragraph w-9/12 md:mb-20 xs:mb-8 text-center leading-[55px]">
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h1>
            <div className="flex justify-center sm:flex-row xs:flex-col lg:h-16 sm:h-12 xs:w-4/5">
              <div className="flex items-center sm:basis-3/4 md:basis-2/4 bg-white lg:py-4 md:px-6 sm:py-2 sm:px-4 xs:px-2 rounded-lg sm:mr-4 sm:mb-0 xs:mr-0 xs:mb-4 text-primary lg:h-16 sm:h-12 xs:h-8 ">
                <CiMail size={21} className="mr-4 fill-primary xs:h-4 sm:h-8" />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="text-sm lg:w-96 md:w-64 xs:w-3/4 outline-0 text-primary"
                />
              </div>
              <CustomButton styling="gradient-two lg:py-4 md:px-6 sm:py-2 sm:px-4 rounded-lg md:text-base xs:text-xs text-white  find-btn lg:h-16 sm:h-12 xs:h-8 ">
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="absolute md:-bottom-6  sm:right-0 sm:-bottom-24 background-right"></div>
      </div>
    </section>
  );
};

export default Subscribe;
