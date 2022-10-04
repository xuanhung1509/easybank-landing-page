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
        <div className='max-w-xl'>
          <h2 className='text-4xl text-eb-dark-blue'>Why choose Easybank?</h2>
          <p className='mt-6 mb-12 text-eb-grayish-blue'>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className='flex items-stretch justify-between gap-8'>
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
    <div className='flex flex-col gap-5'>
      <div className='mb-4'>
        <img src={icon} alt={title} />
      </div>
      <h3 className='text-2xl text-eb-dark-blue'>{title}</h3>
      <p className='text-eb-grayish-blue'>{description}</p>
    </div>
  );
}

export default Features;
