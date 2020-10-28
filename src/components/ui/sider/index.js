import React from 'react';

import Button from '../button';
import menuItems from './menuItems';
import classes from './styles.module.scss';

const siderComponent = (props) => {
  return (
    <div className={classes.sider}>
      <div className={classes.generateInvoice}>
        <Button buttonClass={classes.invoiceBtn}>GENERATE INVOICE</Button>
      </div>

      <nav className={classes.menu}>
        <ul className={classes.menuItems}>
          {menuItems.map((item) => {
            const subItemStyle = [
              classes.subItem,
              item.active ? classes.active : null,
            ];
            return (
              <li key={item.heading} className={classes.menuItem}>
                <div className={classes.itemHeading}>{item.heading}</div>
                {item.subItems.map((subItem) => {
                  return (
                    <div key={subItem.text} className={subItemStyle.join(' ')}>
                      {subItem.icon}
                      <span>{subItem.text}</span>
                    </div>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default siderComponent;
