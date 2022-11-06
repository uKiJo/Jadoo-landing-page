import Image from 'next/image';
import React from 'react';
import heroImage from '../../public/Group 590.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center w-4/5 mx-auto">
      <div className="font-poppins flex flex-col justify-center">
        <h2 className="text-heading1 uppercase mb-6">
          Best Destinations around the world
        </h2>
        <span className="font-volkhov text-7xl w-[545px] font-bold text-heading2 block mb-7">
          Travel, <span className="enjoy">enjoy</span> and live a new and full
          life
        </span>
        <p className="text-paragraph text-base font-normal block w-[477px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
      </div>
      <div className="ml-12">
        <Image src={heroImage} alt="hero-image" width={700} />
      </div>
    </header>
  );
};

export default Header;
