import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      if (
        name.toLowerCase().startsWith(this.state.inputVal.toLowerCase()) ||
        this.state.inputVal === ''
      ) {
        return (
          <li onClick={this.nameClickHandler.bind(this)} key={i}>
            {name}
          </li>
        );
      }
    });

    return (
      <div className="autocomplete">
        <h1 className="autocomplete-title">Autocomplete</h1>
        <div className="autocomplete-form">
          <input
            type="text"
            value={this.state.inputVal}
            className="autocomplete-input"
            onChange={this.updateNames.bind(this)}
          />
          <ul className="autocomplete-list">
            <ReactCSSTransitionGroup
              transitionName="auto"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {names}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}
