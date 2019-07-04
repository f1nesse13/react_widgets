import React from 'react';
import { request } from 'https';
import { api_key } from '../key';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: 'Getting', weather: 'weather info...' };
  }

  componentDidMount() {
    if (!window.navigator.geolocation) {
      return false;
    }
    window.navigator.geolocation.getCurrentPosition(pos => {
      this.getWeather(pos.coords.longitude, pos.coords.latitude);
    });
  }

  getWeather(long, lat) {
    const that = this;
    const req = new XMLHttpRequest();
    req.open(
      'GET',
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${api_key}`,
      true
    );

    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
        const response = JSON.parse(req.responseText);
        that.setState({ city: response.name, weather: `${response.main.temp} °` });
      } else {
        that.setState({ city: 'Error returned', weather: 'from server' });
      }
    };

    req.send();
  }

  render() {
    return (
      <div className="weather-widget">
        <h1 className="weather-title">Current Weather</h1>
        <div className="weather-text">
          <p className="weather-text-city">{this.state.city}</p>
          <p className="weather-text-weather">{this.state.weather}</p>
        </div>
      </div>
    );
  }
}

export default Weather;
