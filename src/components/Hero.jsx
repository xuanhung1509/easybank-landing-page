import React from 'react';
import { Button } from './shared';

function Hero() {
  return (
    <section className='relative flex min-h-screen flex-col justify-center bg-eb-light-gray xl:min-h-[85vh]'>
      <div className='container'>
        <div className='relative top-36 flex flex-col items-center justify-center gap-6 px-4 text-center md:top-44 lg:top-0 lg:w-[40%] lg:items-start lg:px-0 lg:text-left tiny:top-0'>
          <h1 className='text-3xl leading-tight text-eb-dark-blue md:text-5xl'>
            Next generation digital banking
          </h1>
          <p className='text-sm text-eb-grayish-blue md:text-base'>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
      </div>
      <div className='absolute top-0 right-0 h-full w-full overflow-hidden'>
        <div className='image-background' />
      </div>
      <div className='absolute top-0 right-0 h-screen w-full overflow-x-hidden'>
        <div className='image-foreground' />
      </div>
    </section>
  );
}

export default Hero;
