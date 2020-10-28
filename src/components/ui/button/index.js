import React from 'react';

const button = ({ buttonClass, children, ...props }) => {
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default button;
