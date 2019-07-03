import React from 'react';
import Tabs from './tabs';

const Header = props => {
  const selected = props.activeClass;
  const headers = props.tabs.map((tab, i) => (
    <h1
      key={i}
      data-idx={i}
      onClick={props.onClick}
      className={`${i === selected ? 'active' : ''}`}
    >
      {tab.title}
    </h1>
  ));

  return <ul className="tab-headers">{headers}</ul>;
};

export default Header;
