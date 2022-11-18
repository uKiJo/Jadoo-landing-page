import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';

import { HiBars3BottomRight } from 'react-icons/hi2';
import { RiCloseFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { useSmallScreen } from './hooks';

const navbar = {
  open: {
    opacity: 0,
    height: 0,
  },
  closed: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const navItem = {
  open: { opacity: 0, x: 100 },
  closed: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const navbarItems = ['Destinations', 'Hotels', 'Flights', 'Bookings'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = useSmallScreen();

  console.log(smallScreen);

  return (
    <nav className="relative mt-12 mb-6 xs:mx-0 sm:mx-auto xs:w-full md:w-4/5  flex items-center xs:justify-between font-semibold text-primary">
      <div className="w-20 basis-1/6">
        <Image src={Logo} alt="jadoo-logo" />
      </div>
      <AnimatePresence initial={false}>
        {(!smallScreen || open) && (
          <motion.div
            className={
              'flex basis-1/2 overflow-hidden grow xl:relative xs:max-lg:absolute xl:top-0 xs:right-0 xs:top-0 sm:w-1/2 lg:p-4 xs:rounded-lg lg:shadow-none xs:shadow xs:bg-white lg:bg-transparent xs:w-full lg:flex-row xs:flex-col font-google'
            }
            variants={navbar}
            initial={smallScreen && 'open'}
            animate={smallScreen && 'closed'}
            exit={smallScreen ? 'exit' : ''}
          >
            <motion.button
              // variants={navItem}
              className=" flex justify-end lg:hidden p-4"
            >
              <RiCloseFill onClick={() => setOpen(false)} size={30} />
            </motion.button>
            <motion.ul className="flex xs:pb-4 lg:pb-0 xs:h-fit lg:h-fit xs:justify-center xs:grow xs:flex-col lg:flex-row items-center">
              {navbarItems.map((item) => (
                <>
                  <motion.li
                    variants={navItem}
                    className=" xs:p-4 xl:px-6 lg:px-4 xs:mb-4 lg:mb-0 cursor-pointer"
                    key={item}
                  >
                    {item}
                  </motion.li>
                </>
              ))}
              <div>
                <motion.button
                  variants={navItem}
                  className="xs:p-4 xl:pl-12 xl:pr-8 sm:px-6 lg:pr-4"
                >
                  Login
                </motion.button>
              </div>
            </motion.ul>

            <div className="xs:flex justify-center">
              <button className=" px-6 py-2 lg:text-sm rounded border border-black xs:hidden xl:block">
                Sign up
              </button>
            </div>
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
