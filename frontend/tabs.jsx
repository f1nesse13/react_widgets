import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabIdx: 0 };
    this.tab = this.props.tabArray;
    this.updateIndex = this.updateIndex.bind(this);
  }

  render() {
    return (
      <div className="tabs">
        <Header tabs={this.tab} onClick={this.updateIndex} />
        <article className="tabs-content">{this.tab[this.state.tabIdx].content}</article>
      </div>
    );
  }

  updateIndex(event) {
    const tabIdx = event.target.dataset.idx;
    this.setState({ tabIdx });
  }
}

export default Tabs;
