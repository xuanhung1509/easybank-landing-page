import React from 'react';

function Button({ children }) {
  return (
    <button
      type='button'
      className='bg-eb-gradient rounded-full px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-50'
    >
      {children}
    </button>
  );
}

export default Button;
