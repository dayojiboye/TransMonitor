import React from 'react';

import Button from '../button';

const dropdown = ({
  dropClass,
  dropBtn,
  btnText,
  clicked,
  dropMenu,
  children,
  ...props
}) => {
  return (
    <div className={dropClass} {...props}>
      <Button buttonClass={dropBtn} clicked={clicked}>
        {btnText}
      </Button>
      <div className={dropMenu}>{children}</div>
    </div>
  );
};

export default dropdown;
