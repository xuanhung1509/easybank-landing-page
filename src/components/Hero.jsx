import React from 'react';
import { Button } from './shared';
import heroImage from '../assets/image-mockups.png';
import bgIntroDesktop from '../assets/bg-intro-desktop.svg';

function Hero() {
  return (
    <section className='relative flex min-h-[90vh] flex-col justify-center bg-eb-light-gray'>
      <div className='container'>
        <div className='flex items-center justify-between gap-8 overflow-hidden'>
          <div className='flex w-[40%] flex-col items-start justify-center gap-6'>
            <h1 className='text-5xl leading-tight text-eb-dark-blue'>
              Next generation digital banking
            </h1>
            <p className='text-eb-grayish-blue'>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <Button>Request Invite</Button>
          </div>

          <div className='absolute top-0 right-0 h-full w-full overflow-hidden'>
            <img
              src={bgIntroDesktop}
              alt='intro background'
              className='absolute -top-56 -right-96'
            />
          </div>
          <div className='absolute top-0 right-0 h-[110vh] w-full overflow-hidden'>
            <img
              src={heroImage}
              alt='phones'
              className='absolute -top-28 -right-28'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
