import React, { useState } from 'react';

import SearchBar from '../components/SearchBarComponent';
import WeatherListItem from '../components/WeatherListItem';
import SaveCityButton from '../components/SaveCityButton';
import ApiService from '../services/ApiService';

import sortWeatherByDay from '../helpers/sortWeatherByDay';

const Search = ({ testUserId, cityList, setCityList }) => {
  const [city, setCity] = useState('');
  const [cityWeather, setCityWeather] = useState(undefined);
  const [error, setError] = useState('');

  const getCityWeather = async (e) => {
    e.preventDefault();

    setCity(e.target.city.value);
    const data = await ApiService.fetchWeather(city);
    const sortedData = {
      name: data.city.name,
      weather: sortWeatherByDay(data),
    };
    setCityWeather(sortedData);
  };

  const saveCity = async () => {
    if (cityList.includes(city)) {
      setError('This city is already in your saved cities.');
    } else {
      setError('');
      const res = await ApiService.postCity(testUserId, city);
      if (res) {
        setCityList((old) => [...old, city]);
      }
    }
  };

  return (
    <div className="row">
      <div className="section">
        <div className="col s12">
          <SearchBar
            city={city}
            setCity={setCity}
            getCityWeather={getCityWeather}
          />
          <div className="col s12">
            <div className="col s4"></div>
            <WeatherListItem weather={cityWeather} />
          </div>
          {cityWeather ? <SaveCityButton saveCity={saveCity} /> : null}
          <p className="col s4 offset-s4 red-text text-darken-2">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
