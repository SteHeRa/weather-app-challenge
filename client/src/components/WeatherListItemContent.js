import React from 'react';

const WeatherListItemContent = ({ weather }) => {
  console.log(weather);
  return (
    <div className="card-content">
      <div className="col s12">
        <div className="col s4 offset-s3">
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
      </div>
      <ul>
        <li>{new Date(weather.dt * 1000).toUTCString()}</li>
        <li>
          {weather.weather[0].main}: {weather.weather[0].description}
        </li>
        <li>Temp: {weather.main.temp}&deg;C</li>
        <li>Humidity: {weather.main.humidity}%</li>
      </ul>
    </div>
  );
};

export default WeatherListItemContent;
