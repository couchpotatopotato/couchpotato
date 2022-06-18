import React, { useState } from 'react';

import './Navbar.scss';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const links = [
    {
      text: 'Movies',
      href: '',
    },
    {
      text: 'Upcoming',
      href: '',
    },
    {
      text: 'Cinemas',
      href: '',
    },
    {
      text: 'Promotions',
      href: '',
    },
    {
      text: 'Contact',
      href: '',
    },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-brand">CouchPotato</div>
      {links.length > 0 && (
        <button
          type="button"
          aria-expanded="false"
          aria-label="Menu"
          className={`navbar-burger burger${isVisible ? ' is-active' : ''}`}
          data-target="navbar"
          onClick={(): void => setIsVisible((state) => !state)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      )}
      <div className="navbar-menu">
        <div className="navbar-start">
          {links.map((link) => {
            return (
              <button type="button" key={link.text}>
                {link.text}
              </button>
            );
          })}
        </div>
        <div className="navbar-end">
          <a href="/">Log in</a>
          <a href="/" className="white">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
