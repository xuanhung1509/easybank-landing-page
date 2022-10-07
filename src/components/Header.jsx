import React, { useState, useEffect } from 'react';
import { Button } from '@/components/shared';
import { ReactComponent as IconHamburger } from '@/assets/icon-hamburger.svg';
import { ReactComponent as IconClose } from '@/assets/icon-close.svg';
import logo from '@/assets/logo.svg';

const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll if menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen]);

  return (
    <>
      <header className='relative z-30 bg-white py-2 shadow'>
        <div className='container'>
          <div className='flex items-center justify-between gap-2'>
            <div>
              <img src={logo} alt='logo' />
            </div>

            <ul
              className={`absolute top-full left-1/2 z-20 mt-4 flex w-5/6 -translate-x-1/2 flex-col items-center justify-center gap-6 rounded-md bg-white py-6 shadow-lg transition-all duration-300 md:static md:mt-0 md:w-auto md:translate-x-0 md:flex-row md:shadow-none ${
                !menuOpen && 'opacity-0 lg:opacity-100'
              }`}
            >
              {navItems.map((item) => (
                <li
                  key={item}
                  className='cursor-pointer text-sm text-eb-dark-blue transition-colors hover:text-eb-dark-blue md:text-eb-grayish-blue'
                >
                  {item}
                </li>
              ))}
            </ul>

            <button
              type='button'
              className='z-10 flex h-10 w-10 items-center justify-center md:hidden'
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <IconClose /> : <IconHamburger />}
            </button>
            <Button className='hidden md:block'>Request Invite</Button>
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 left-0 z-20 h-full w-full bg-gradient-to-b from-eb-dark-blue/50 to-white transition-all duration-300 ${
          !menuOpen && '-translate-y-full opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}

export default Header;
