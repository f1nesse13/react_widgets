import React from 'react';
import Tabs from './tabs';

const Header = ({ tabs, onClick }) => {
  return (
    <ul className="tab-headers">
      {tabs.map((tab, i) => (
        <h1 data-idx={i} onClick={onClick}>
          {tab.title}
        </h1>
      ))}
    </ul>
  );
};

export default Header;
