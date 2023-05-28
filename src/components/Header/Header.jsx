
import React from 'react';
import { NavLink } from 'react-router-dom';

import {navLinks} from '../../variables/variables'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <ul className={style.list}>
        {navLinks.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.path}
              className={style.link}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};
