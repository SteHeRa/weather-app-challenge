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
      const sortedData = data.map((city) => {
        return {
          name: city.city.name,
          weather: sortWeatherByDay(city),
        };
      });
      setCityWeathers(sortedData);
    } else setCityWeathers([]);
  };

  const sortWeatherByDay = (weather) => {
    const weatherSortedByDay = [[], [], [], [], [], []];
    if (weather) {
      let currentDay;
      let split = 0;
      for (let i = 0; i < 6; i++) {
        let day = [];
        for (let j = split; j < weather.list.length; j++) {
          if (currentDay === new Date(weather.list[j].dt * 1000).getDay()) {
            day.push(weather.list[j]);
          } else if (currentDay === undefined) {
            currentDay = new Date(weather.list[j].dt * 1000).getDay();
            day.push(weather.list[j]);
          } else {
            currentDay = new Date(weather.list[j].dt * 1000).getDay();
            split = j;
            break;
          }
        }
        weatherSortedByDay[i] = day;
      }
    }
    return weatherSortedByDay;
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
                    key={cityWeather.name}
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
