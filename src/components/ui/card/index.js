import React from 'react';

const card = ({ children, cardClass }) => {
  return <div className={cardClass}>{children}</div>;
};

export default card;
