import React from 'react';
import Image from 'next/image';

import logos from './logos';

interface SponsorsProps {}

const Sponsors: React.FC<SponsorsProps> = (props) => {
  return (
    <section>
      <div className="flex justify-evenly h-[86px] items-center mb-24">
        {logos.map((logo, i) => (
          <div
            className=" flex h-full  px-8 py-4 rounded-lg box-shadow grayscale hover:grayscale-0"
            key={i}
          >
            <Image
              className=" w-40 object-contain self-center"
              src={logo}
              alt={i.toString()}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
