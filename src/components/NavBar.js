import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import './NavBar.css';

const NavMenu = [
  {
    title: 'Home | ',
    url: '/',
    CName: 'nav-link',
  },
  {
    title: 'Calculator | ',
    url: '/Calculator',
    CName: 'nav-link',
  },
  {
    title: 'Quotes ',
    url: '/Quote',
    CName: 'nav-link',
  },
];
const NavBar = () => (
  <nav>
    <h1>Math Magician</h1>
    <ul className="nav-link-wrap">
      {NavMenu.map((item) => (
        <li key={generate({ charset: alphanumeric })}>
          <a className={item.CName} href={item.url}>
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
