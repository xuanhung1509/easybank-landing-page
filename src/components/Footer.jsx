import React from 'react';
import { Button } from '@/components/shared';
import { ReactComponent as IconFacebook } from '@/assets/icon-facebook.svg';
import { ReactComponent as IconYoutube } from '@/assets/icon-youtube.svg';
import { ReactComponent as IconTwitter } from '@/assets/icon-twitter.svg';
import { ReactComponent as IconPinterest } from '@/assets/icon-pinterest.svg';
import { ReactComponent as IconInstagram } from '@/assets/icon-instagram.svg';
import logo from '@/assets/logo-white.svg';

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
        <div className='flex flex-col gap-12 md:gap-16 lg:flex-row'>
          <div className='flex flex-col items-center justify-between gap-8'>
            <img src={logo} alt='logo' />
            <div className='flex items-center justify-center gap-3'>
              {socialLinks.map(({ url, icon }) => (
                <a key={url} href={url}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className='mx-auto grid max-w-sm grid-cols-1 gap-x-20 gap-y-4 text-center md:grid-cols-2 lg:ml-16 lg:text-left'>
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

          <div className='flex flex-col items-center justify-center gap-6 text-center lg:ml-auto lg:items-end lg:text-right'>
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
