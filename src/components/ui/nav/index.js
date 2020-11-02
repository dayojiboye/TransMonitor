import React from 'react';

import Input from '../input';
import { Bell } from '../../../assets/svg';
import profilePic from '../../../assets/images/8CC23778-6783-4B83-ACB3-1264819DC4C5remote983bbcad23a25365a45085eb12a12c1fdc85655a-1-original.jpeg';
import classes from './styles.module.scss';

const nav = (props) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.searchBox}>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>

      <ul className={classes.navItems}>
        <li>Support</li>
        <li>FAQ</li>
        <li>
          <Bell />
        </li>
        <li>
          <div className={classes.profile}>
            <div className={classes.profileName}>
              <small>Hello</small>
              <span>Oluwaleke Ojo</span>
            </div>
            <div className={classes.avatar}>
              <img src={profilePic} alt="avatar" />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default nav;
