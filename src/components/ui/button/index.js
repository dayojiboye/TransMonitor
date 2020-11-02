import React from 'react';

const button = ({ buttonClass, clicked, children, ...props }) => {
  return (
    <button className={buttonClass} onClick={clicked} {...props}>
      {children}
    </button>
  );
};

export default button;
