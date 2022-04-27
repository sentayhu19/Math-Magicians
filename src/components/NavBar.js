import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faHome, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const IconSelector = (index) => {
  if (index === 0) {
    return <FontAwesomeIcon icon={faHome} />;
  }
  if (index === 1) {
    return <FontAwesomeIcon icon={faCalculator} />;
  }

  return <FontAwesomeIcon icon={faQuoteLeft} />;
};
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
      {NavMenu.map((item, index) => (
        <li key={generate({ charset: alphanumeric })}>
          <a className={item.CName} href={item.url}>
            {IconSelector(index)}
            {'    '}
            {item.title}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
export default NavBar;
