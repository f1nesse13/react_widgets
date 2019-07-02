import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    let date = new Date();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    date = date.toDateString();
    this.state = { date, time };
    this.updateClock = window.setInterval(this.tick.bind(this), 1000);
  }

  componentDidMount() {
    this.updateClock;
  }
  componentWillUnmount() {
    clearInterval(this.updateClock);
  }
  render() {
    return (
      <div className='clock'>
        <h1 className="clock-title">React Clock</h1>
        <div className="time-date-container">
          <p>
            <span>Time: </span>
            <span>{this.state.time} EST</span>
          </p>
          <p>
            <span>Date: </span>
            <span>{this.state.date}</span>
          </p>
        </div>
      </div>
    );
  }

  tick() {
    let date = new Date();
    let time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
    date = date.toDateString();

    this.setState({ date, time });
  }
}

export default Clock;
