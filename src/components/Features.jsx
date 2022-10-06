import React from 'react';
import icon1 from '../assets/icon-online.svg';
import icon2 from '../assets/icon-budgeting.svg';
import icon3 from '../assets/icon-onboarding.svg';
import icon4 from '../assets/icon-api.svg';

const featureItems = [
  {
    icon: icon1,
    title: 'Online Banking',
    description:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: icon2,
    title: 'Simple Budgeting',
    description:
      'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
  },
  {
    icon: icon3,
    title: 'Fast Onboarding',
    description:
      'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
  },
  {
    icon: icon4,
    title: 'Open API',
    description:
      'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
  },
];

function Features() {
  return (
    <section className='bg-eb-light-grayish-blue py-28'>
      <div className='container'>
        <div className='mx-auto max-w-xl lg:mx-0'>
          <h2 className='px-2 text-center text-2xl text-eb-dark-blue md:text-4xl lg:px-0 lg:text-left tiny:text-xl'>
            Why choose Easybank?
          </h2>
          <p className='mt-6 mb-12 px-2 text-center text-sm text-eb-grayish-blue md:text-base lg:px-0 lg:text-left'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className='grid grid-cols-1 items-stretch justify-between gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:flex-row'>
          {featureItems.map((item) => (
            <FeatureItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, description }) {
  return (
    <div className='flex flex-col items-center gap-5 text-center sm:items-start sm:text-left'>
      <div className='mb-4'>
        <img src={icon} alt={title} />
      </div>
      <h3 className='text-xl text-eb-dark-blue md:text-2xl tiny:text-lg'>
        {title}
      </h3>
      <p className='text-sm text-eb-grayish-blue'>{description}</p>
    </div>
  );
}

export default Features;
