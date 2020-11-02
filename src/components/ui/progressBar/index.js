import React from 'react';

const progressBar = ({ pgClass, children, ...props }) => {
  return (
    <div className={pgClass} {...props}>
      {children}
    </div>
  );
};

export default progressBar;
