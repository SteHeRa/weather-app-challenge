import React, { useEffect, useState } from 'react';

import WeatherListItem from '../components/WeatherListItem';
import ApiService from '../services/ApiService';

const WeatherList = ({ cityList }) => {
  const [cityWeathers, setCityWeathers] = useState([]);

  const getCityWeathers = async (cityList) => {
    if (cityList.length > 0) {
      const data = await Promise.all(
        await cityList.map(async (city) => {
          const res = await ApiService.fetchWeather(city);
          return res;
        })
      );
      setCityWeathers(data);
    } else return [];
  };

  useEffect(() => {
    getCityWeathers(cityList);
  }, [cityList]);

  return (
    <div className="row">
      <h2>Your Saved Cities</h2>
      <div className="divider"></div>
      <div className="section">
        <div className="col s12">
          {cityWeathers.length
            ? cityWeathers.map((cityWeather) => {
                return (
                  <WeatherListItem
                    key={cityWeather.city.name}
                    weather={cityWeather}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default WeatherList;
