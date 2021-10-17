import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName={classes.active}>
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/newMeetup" activeClassName={classes.active}>
              New Meetup
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName={classes.active}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
