import React from 'react';
import Tabs from './tabs';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeClass, tabs, onClick } = this.props;
    const headers = tabs.map((tab, i) => (
      <h1 key={i} data-idx={i} onClick={onClick} className={`${i === activeClass ? 'active' : ''}`}>
        {tab.title}
      </h1>
    ));
    return <ul className="tab-headers">{headers}</ul>;
  }
}

export default Header;
