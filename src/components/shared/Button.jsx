import React from 'react';

function Button({ children }) {
  return (
    <button className='bg-eb-gradient rounded-full px-8 py-3 font-bold text-white'>
      {children}
    </button>
  );
}

export default Button;
