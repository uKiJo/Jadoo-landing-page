import React from 'react';
import CustomButton from '../custom-button/CustomButton';

import { IoPaperPlane } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';

interface SubscribeProps {}

const Subscribe: React.FC<SubscribeProps> = (props) => {
  return (
    <section className="flex justify-center mb-24">
      <div className="w-section relative">
        <div className="absolute rounded-full p-4 gradient-one -top-5 -right-5 z-10">
          <IoPaperPlane size={35} color="white" />
        </div>
        <div className="h-96 w-full bg-violet/[0.2] rounded-tl-[129px] rounded-bl-3xl rounded-r-3xl overflow-hidden">
          <div className="flex justify-center items-center h-full">
            <div className="flex items-center bg-white h-fit py-4 px-6 rounded-lg mr-4">
              <CiMail className="mr-4 fill-primary" />
              <input
                type="text"
                placeholder="Your Email"
                className="text-sm w-80 outline-0 text-primary"
              />
            </div>
            <CustomButton styling="gradient-two py-4 px-6 rounded-lg text-sm text-white mr-8 find-btn">
              Subscribe
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
