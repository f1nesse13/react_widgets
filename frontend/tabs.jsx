import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIdx: 0 };
    this.tab = this.props.tabArray;
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(event) {
    const tabIdx = event.target.dataset.idx;
    this.setState({ tabIdx });
  }

  render() {
    return (
      <div className="tabs">
        <div className="header">
          <Header activeClass={this.state.tabIdx} tabs={this.tab} onClick={this.updateIndex} />
        </div>
        <div className="tabs-content">
          <article className="tabs-content">{this.tab[this.state.tabIdx].content}</article>
        </div>
      </div>
    );
  }
}

export default Tabs;
