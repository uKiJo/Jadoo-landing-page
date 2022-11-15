import React from 'react';

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGooglePlay,
  FaApple,
} from 'react-icons/fa';
import CustomButton from '../shared/CustomButton';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <footer className="flex justify-center mb-24">
      <div className="flex justify-between w-section font-poppins">
        <div>
          <h1 className="text-5xl font-medium text-primary mb-8">Jadoo.</h1>
          <p className="text-sm font-medium text-paragraph w-52">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex basis-1/2 justify-around">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Company</h1>
            <span className="font-medium text-paragraph mb-2">Career</span>
            <span className="font-medium text-paragraph mb-2">About</span>
            <span className="font-medium text-paragraph mb-2">Mobile</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">Contact</h1>
            <span className="font-medium text-paragraph mb-2">Help/FAQ</span>
            <span className="font-medium text-paragraph mb-2">Press</span>
            <span className="font-medium text-paragraph mb-2">Affiliates</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4">More</h1>
            <span className="font-medium text-paragraph mb-2">
              Airlinesfess
            </span>
            <span className="font-medium text-paragraph mb-2">Airline</span>
            <span className="font-medium text-paragraph mb-2">
              Lower fare tips
            </span>
          </div>
        </div>
        <div>
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