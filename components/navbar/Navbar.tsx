import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

import { HiBars3BottomRight } from 'react-icons/hi2';
import { RiCloseFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';

const navbar = {
  open: {
    opacity: 0,
    height: 0,
  },
  closed: {
    opacity: 1,
    height: 'auto',
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const navbarItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    mediaQuery.addEventListener('change', () =>
      handleMediaQueryChange(mediaQuery)
    );
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', () =>
        handleMediaQueryChange(mediaQuery)
      );
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery: MediaQueryList) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };
  console.log('open', open);
  return (
    <nav className="relative mt-12 mb-6 lg:mx-auto xs:w-full lg:w-4/5  justify-between flex items-center font-semibold text-primary">
      <div className="w-20">
        <Image src={Logo} alt="jadoo-logo" />
      </div>
      <AnimatePresence>
        {(!isSmallScreen || open) && (
          <motion.div
            className={`${'flex overflow-hidden xl:justify-end xl:relative xs:max-lg:absolute xl:top-0 xs:right-0 xs:top-0 sm:w-1/2 lg:p-4 xs:rounded-lg lg:shadow-none xs:shadow xs:bg-white lg:bg-transparent xs:w-full lg:flex-row xs:flex-col font-google'} `}
            variants={navbar}
            initial={'open'}
            animate={'closed'}
            exit={'open'}
            transition={{ duration: 0.4 }}
          >
            <motion.button className="flex justify-end lg:hidden p-4">
              <RiCloseFill onClick={() => setOpen(false)} size={30} />
            </motion.button>
            <AnimatePresence>
              <motion.ul
                className="flex xs:flex-col lg:flex-row items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, staggerChildren: 0.2 }}
              >
                {navbarItems.map((item) => (
                  <li
                    className="xl:px-6 lg:px-4 xs:mb-4 lg:mb-0 cursor-pointer"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            {/* <div className="xs:flex justify-center">
              <button className="xl:pl-12 xl:pr-8 sm:px-6 lg:pr-4">
                Login
              </button>
              <button className="px-6 py-2 lg:text-sm rounded border border-black xs:hidden xl:block">
                Sign up
              </button>
            </div> */}
          </motion.div>
        )}
      </AnimatePresence>
      <select className="bg-transparent ml-6" name="" id="">
        <option value="EN">EN</option>
        <option value="FR">FR</option>
      </select>
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <HiBars3BottomRight size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
