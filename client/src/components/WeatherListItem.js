import React from 'react';

const WeatherListItem = ({ weather }) => {
  return weather ? (
    <div>
      <div className="row">
        <div className="col s2 m6">
          <div className="card">
            <div className="card-title">
              <span>{weather.city.name}</span>
              <button className="btn-floating waves-effect waves-light red">
                <i className="material-icons">add</i>
              </button>
            </div>
            <div className="card-content">
              <img
                src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
              <ul>
                <li>{new Date(weather.list[0].dt * 1000).toUTCString()}</li>
                <li>
                  {weather.list[0].weather[0].main}:{' '}
                  {weather.list[0].weather[0].description}
                </li>
                <li>Temp: {weather.list[0].main.temp}&deg;C</li>
                <li>Humidity: {weather.list[0].main.humidity}%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default WeatherListItem;
