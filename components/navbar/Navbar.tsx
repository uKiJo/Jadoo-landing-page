import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

import { HiBars3BottomRight } from 'react-icons/hi2';

const navbarItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative mt-12 mb-6 mx-auto w-4/5  justify-between flex items-center font-semibold text-primary">
      <div>
        <Image src={Logo} alt="jadoo-logo" />
      </div>
      <div className="flex xl:relative sm:absolute xl:top-0 sm:top-14 sm:p-4 sm:rounded-lg lg:shadow-none sm:shadow sm:bg-white sm:w-full xl:flex-row sm:flex-col font-google">
        <ul className="flex sm:flex-col xl:flex-row items-center">
          {navbarItems.map((item) => (
            <li
              className="xl:px-6 lg:px-4 sm:mb-4 lg:mb-0 cursor-pointer"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <button className="xl:pl-12 lg:pl-6 xl:pr-8 lg:pr-4">Login</button>
        <button className="xl:mx-8 lg:mx-4 px-6 py-2 lg:text-sm rounded border border-black">
          Sign up
        </button>
        <select className="bg-transparent" name="" id="">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>
      </div>

      <div>
        <HiBars3BottomRight size={30} />
      </div>
    </nav>
  );
};

export default Navbar;
