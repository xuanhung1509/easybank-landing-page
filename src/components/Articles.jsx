import React from 'react';
import thumbnail1 from '@/assets/image-currency.jpg';
import thumbnail2 from '@/assets/image-restaurant.jpg';
import thumbnail3 from '@/assets/image-plane.jpg';
import thumbnail4 from '@/assets/image-confetti.jpg';

const articleItems = [
  {
    thumbnail: thumbnail1,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    summary:
      'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
  },
  {
    thumbnail: thumbnail2,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    summary:
      'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
  },
  {
    thumbnail: thumbnail3,
    author: 'Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    summary:
      'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
  },
  {
    thumbnail: thumbnail4,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are now live!',
    summary:
      'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
  },
];

function Articles() {
  return (
    <section className='bg-eb-light-gray py-16'>
      <div className='container'>
        <h2 className='mb-6 text-center text-2xl text-eb-dark-blue md:text-4xl lg:mb-12 lg:text-left tiny:text-xl'>
          Latest Articles
        </h2>
        <div className='grid grid-cols-1 items-stretch justify-between gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {articleItems.map((item) => (
            <ArticleItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArticleItem({ thumbnail, author, title, summary }) {
  return (
    <div className='mx-auto flex max-w-sm flex-col items-stretch overflow-hidden rounded bg-white'>
      <div className='h-48'>
        <img
          src={thumbnail}
          alt={title}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex flex-col items-start gap-3 p-6'>
        <small className='text-xs text-eb-grayish-blue'>By {author}</small>
        <a href='#somewhere'>
          <h3 className='text-lg leading-5 text-eb-dark-blue transition-colors hover:text-eb-lime-green md:text-xl'>
            {title}
          </h3>
        </a>
        <p className='text-sm text-eb-grayish-blue'>{summary}</p>
      </div>
    </div>
  );
}

export default Articles;
