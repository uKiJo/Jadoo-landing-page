import React from 'react';
import Image from 'next/image';

import logos from './logos';

interface SponsorsProps {}

const Sponsors: React.FC<SponsorsProps> = (props) => {
  return (
    <section className="flex justify-center">
      <div className="flex justify-between w-section h-[86px] items-center mb-24">
        {logos.map((logo, i) => (
          <div
            className=" flex h-full  px-8 py-4 rounded-lg box-shadow grayscale hover:grayscale-0"
            key={i}
          >
            <a className=" w-40 object-contain self-center" href="#">
              <Image src={logo} alt={i.toString()} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
