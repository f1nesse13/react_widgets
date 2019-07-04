import React from 'react';

export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
  }

  updateNames(e) {
    console.log(e.target.value.toString());
    this.setState({ inputVal: e.target.value.toString() });
  }

  nameClickHandler(e) {
    this.setState({ inputVal: e.target.innerText });
  }
  //
  render() {
    const { nameList } = this.props;
    const names = nameList.map((name, i) => {
      if (name.toLowerCase().startsWith(this.state.inputVal) || this.state.inputVal === '') {
        return (
          <li onClick={this.nameClickHandler.bind(this)} key={i}>
            {name}
          </li>
        );
      }
    });

    return (
      <div className="autocomplete">
        <input
          type="text"
          value={this.state.inputVal}
          className="autocomplete-input"
          onChange={this.updateNames.bind(this)}
        />
        <ul className="autocomplete-list">{names}</ul>
      </div>
    );
  }
}
