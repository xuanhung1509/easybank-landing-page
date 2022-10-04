import React from 'react';
import { Button } from './shared';
import logo from '../assets/logo-white.svg';
import { ReactComponent as IconFacebook } from '../assets/icon-facebook.svg';
import { ReactComponent as IconYoutube } from '../assets/icon-youtube.svg';
import { ReactComponent as IconTwitter } from '../assets/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '../assets/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '../assets/icon-instagram.svg';

const socialLinks = [
  {
    icon: <IconFacebook className='social-icon' />,
    url: 'http://facebook.com',
  },
  {
    icon: <IconYoutube className='social-icon' />,
    url: 'http://youtube.com',
  },
  {
    icon: <IconTwitter className='social-icon' />,
    url: 'http://twitter.com',
  },
  {
    icon: <IconPinterest className='social-icon' />,
    url: 'http://pinterest.com',
  },
  {
    icon: <IconInstagram className='social-icon' />,
    url: 'http://instagram.com',
  },
];

const navItems = [
  'About Us',
  'Contact',
  'Blog',
  'Careers',
  'Support',
  'Privacy Policy',
];

function Footer() {
  return (
    <footer className='bg-eb-dark-blue py-12 text-white'>
      <div className='container'>
        <div className='flex gap-36'>
          <div className='flex flex-col items-center justify-between gap-4'>
            <img src={logo} alt='logo' />
            <div className='flex items-center justify-center gap-3'>
              {socialLinks.map(({ url, icon }) => (
                <a key={url} href={url}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className='grid grid-cols-2 gap-x-20 gap-y-4'>
            {navItems.map((item) => (
              <a
                key={item}
                href='#somewhere'
                className='text-sm text-eb-light-gray transition-colors hover:text-eb-lime-green'
              >
                {item}
              </a>
            ))}
          </div>

          <div className='ml-auto flex flex-col items-end justify-center gap-6'>
            <Button>Request Invite</Button>
            <p className='text-sm text-eb-grayish-blue'>
              © Easybank. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
