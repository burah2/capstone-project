// src/DropdownMenu.js
import React from 'react';

const DropdownMenu = ({ title, icon, imageUrl, items }) => {
  return (
    <li className="navbar-item has-dropdown is-active" role="menuitem">
      <div
        className="navbar-link"
        aria-haspopup="true"
        aria-expanded="false"
        tabIndex="-1"
        data-nametext={title}
      >
        {/* Icon and text for Your Journey */}
        <i className={icon}></i> {title}
        <img src={imageUrl} alt="" />
      </div>
      <ul className="navbar-dropdown is-boxed is-radiusless" role="menu" aria-label={title}>
        {items.map((item, index) => (
          <li key={index} role="menuitem">
            <a href={item.link} className="navbar-item">
              {item.text}
            </a>
          </li>
        ))}
        {/* Add more dropdown items as needed */}
      </ul>
    </li>
  );
};

export default DropdownMenu;
