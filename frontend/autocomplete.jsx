import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
  }

  render() {
    const { nameList } = this.props;
    const names = nameList.map((name, i) => {
      <li key={i}>{name}</li>;
    });

    return <ul>{names}</ul>;
  }
}
