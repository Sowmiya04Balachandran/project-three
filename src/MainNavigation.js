// MainNavigation.js
import React from 'react';
//import { Link } from 'react-router-dom';
import classes from './Mainnavigation.module.css';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header className={classes.header} >
    
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/home'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>
      </nav>
      </header>
  );
};

export default MainNavigation;
