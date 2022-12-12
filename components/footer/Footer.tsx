import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa';
import CustomButton from '../shared/CustomButton';

const Footer: React.FC = () => {
  return (
    <footer className="md:w-4/5 mx-auto flex justify-between mb-24">
      <div className="sm:w-full grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 justify-between xs:w-11/12 font-poppins">
        <div className="xs:mb-8 ">
          <h1 className="text-5xl font-medium text-primary mb-8">Jadoo.</h1>
          <p className="text-sm font-medium text-paragraph w-52">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="col-span-2 xs:grid xs:grid-cols-2 md:flex md:flex-row  md:mx-0 lg:justify-evenly xs:justify-between xs:mb-8 md:mb-0 md:mt-8 lg:mt-0">
          <div className="flex flex-col">
            <h1 className="md:text-xl xs:text-base font-bold mb-4">Company</h1>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Career
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              About
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Mobile
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-xl xs:text-base font-bold mb-4">Contact</h1>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Help/FAQ
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Press
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Affiliates
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="md:text-xl xs:text-base font-bold mb-4">More</h1>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Airlinesfess
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Airline
            </span>
            <span className="font-medium text-paragraph mb-2 text-sm">
              Lower fare tips
            </span>
          </div>
        </div>
        <div className="lg:justify-self-end md:justify-self-center md:col-start-2 md:row-start-1 lg:col-start-4">
          <div className="flex mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full mr-6 icon-shadow">
              <FaFacebookF />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-full mr-6 icon-shadow insta-bg">
              <FaInstagram color="white" />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-full mr-6 icon-shadow">
              <FaTwitter />
            </div>
          </div>
          <div className="mb-4">
            <span>Discover our app</span>
          </div>
          <div className="flex ">
            <CustomButton styling="bg-black text-white rounded-full py-2 px-6 w-28 mr-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <FaGooglePlay size={20} />
                  <span className=" ml-2 text-xs">Google play</span>
                </div>
              </div>
            </CustomButton>
            <CustomButton styling="bg-black text-white rounded-full py-2 px-6 w-28">
              <div className="flex items-center">
                <FaApple size={20} />
                <span className=" ml-2 text-xs">Apple</span>
              </div>
            </CustomButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
