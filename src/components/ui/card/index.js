import React from 'react';

const card = ({ children, cardClass, ...props }) => {
  return <div className={cardClass} {...props}>{children}</div>;
};

export default card;
