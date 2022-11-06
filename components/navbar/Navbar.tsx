import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

const navbarItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Navbar = () => {
  return (
    <nav className="mt-12 mb-6 mx-auto w-4/5 justify-between flex items-center font-semibold text-primary">
      <div>
        <Image src={Logo} alt="jadoo-logo" />
      </div>
      <div className="flex font-google">
        <ul className="flex items-center">
          {navbarItems.map((item) => (
            <li className="px-8" key={item}>
              {item}
            </li>
          ))}
        </ul>
        <button className="pl-12 pr-8">Login</button>
        <button className="mx-8 px-6 py-2 rounded border border-black">
          Sign up
        </button>
        <select className="bg-transparent" name="" id="">
          <option value="EN">EN</option>
          <option value="FR">FR</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
