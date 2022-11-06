import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

// import './navbar.scss';

const navbarItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Navbar = () => {
  return (
    <nav className="mt-12 mx-auto w-3/4 flex justify-between items-center bg-blue-100">
      <div>
        <Image src={Logo} alt="jadoo-logo" />
      </div>
      <ul className="flex">
        {navbarItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
