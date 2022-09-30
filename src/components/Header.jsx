import React from 'react';
import { Button } from './shared';
import logo from '../assets/logo.svg';

const navItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

function Header() {
  return (
    <header className='py-3'>
      <div className='container'>
        <div className='flex items-center justify-between gap-2'>
          <div>
            <img src={logo} alt='logo' />
          </div>
          <ul className='flex items-center justify-center gap-4 '>
            {navItems.map((item) => (
              <li
                key={item}
                className='cursor-pointer text-eb-grayish-blue transition-colors hover:text-eb-dark-blue'
              >
                {item}
              </li>
            ))}
          </ul>
          <Button>Request Invite</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
