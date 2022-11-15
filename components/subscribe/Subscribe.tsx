import React from 'react';
import CustomButton from '../shared/CustomButton';

import { HiPaperAirplane } from 'react-icons/hi';
import { CiMail } from 'react-icons/ci';

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <section className="flex justify-center mb-24 h-[492px]">
      <div className="w-section relative">
        <div className="absolute rounded-full p-4 gradient-one -top-5 -right-5 z-10 flex items-center">
          <HiPaperAirplane
            size={35}
            color="white"
            className=" origin-[60%_55%] rotate-[60deg]"
          />
        </div>

        <div className="h-96 w-full bg-violet/[0.2] rounded-tl-[129px] rounded-bl-3xl rounded-r-3xl overflow-hidden background-circles background-upper">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="font-poppins font-semibold text-4xl text-paragraph w-9/12 mb-20 text-center leading-[55px]">
              Subscribe to get information, latest news and other interesting
              offers about Cobham
            </h1>
            <div className="flex ">
              <div className="flex items-center bg-white h-fit py-4 px-6 rounded-lg mr-4 h-16 w-[420px] text-primary">
                <CiMail size={21} className="mr-4 fill-primary" />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="text-sm w-80 outline-0 text-primary"
                />
              </div>
              <CustomButton styling="gradient-two py-4 px-8 rounded-lg text-base text-white mr-8 find-btn">
                Subscribe
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 -right-24 background-right"></div>
      </div>
    </section>
  );
};

export default Subscribe;
