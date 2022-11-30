import React from 'react';
import Image from 'next/image';

import logos from './logos';

interface SponsorsProps {}

const Sponsors: React.FC<SponsorsProps> = (props) => {
  return (
    <section className="flex justify-center md:mb-24 xs:mb-1 md:w-11/12 xl:w-4/5 mx-auto">
      <div className="grid md:grid-cols-5 xs:grid-cols-2 justify-center sm:h-96 md:h-fit xs:w-full mb-24">
        {logos.map((logo, i) => (
          <div
            className=" flex lg:h-[86px] xs:h-16 xs:w-28 sm:w-40 lg:w-48 lg:px-8 lg:py-4 sm:px-6 sm:py-2 justify-self-center self-center rounded-lg box-shadow grayscale hover:grayscale-0"
            key={i}
          >
            <a className=" w-40 self-center" href="#">
              <Image src={logo} alt={i.toString()} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
