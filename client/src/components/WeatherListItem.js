import React from 'react';

const WeatherListItem = ({ weather }) => {
  return weather ? (
    <div className="col s3 m4">
      <div className="card">
        <div className="card-title">
          <span>{weather.city.name}</span>
        </div>
        <div className="card-content">
          <div className="col s12">
            <div className="col s4 offset-s3">
              <img
                src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
            </div>
          </div>
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
  ) : null;
};

export default WeatherListItem;
