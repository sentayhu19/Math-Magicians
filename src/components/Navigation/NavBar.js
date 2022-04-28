import React from 'react';
import { generate } from 'randomized-string';
import { alphanumeric } from 'randomized-string/lib/types';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faHome, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const IconSelector = (index) => {
  if (index === 0) {
    return <FontAwesomeIcon icon={faHome} title="Home" />;
  }
  if (index === 1) {
    return <FontAwesomeIcon icon={faCalculator} title="Calculator" />;
  }

  return <FontAwesomeIcon icon={faQuoteLeft} title="quote" />;
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

const navhandler = (e) => {
  document.getElementById(e.target.id).style.cssText = 'color: yellow;';
};
const NavBar = () => (
  <>
    <nav>
      <a href={NavMenu[0].url}>
        <h1>
          <span className="logo-m">M</span>
          ath Magician
        </h1>
      </a>
      {' '}
      <ul className="nav-link-wrap">
        {NavMenu.map((item, index) => (
          <li key={generate({ charset: alphanumeric })}>
            <Link className={item.CName} id={index} href={item.url} onClick={navhandler}>
              {IconSelector(index)}
              {'    '}
              <span className="title">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </>
);
export default NavBar;
