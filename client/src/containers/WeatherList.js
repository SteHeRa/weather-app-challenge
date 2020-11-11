import React, { useState, useEffect } from 'react';

import WeatherListItem from '../components/WeatherListItem';

const WeatherList = ({ cityList }) => {
  const [cityWeathers, setCityWeathers] = useState([]);

  const getCityWeathers = async (cityList) => {
    const data = cityList.map((city) => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=8ff99047cb9ea5a17b8fb164145df50c`
      ).then((res) => res.json());
    });
    setCityWeathers(data);
  };

  useEffect(() => {
    getCityWeathers(cityList);
  }, [cityList]);

  return (
    <div>
      <h2>Saved Cities</h2>
      {cityWeathers.map((weather) => (
        <WeatherListItem key={weather.city.name} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList;
