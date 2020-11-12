import React, { useState } from 'react';

import SearchBar from '../components/SearchBarComponent';
import WeatherListItem from '../components/WeatherListItem';
import SaveCityButton from '../components/SaveCityButton';
import ApiService from '../services/ApiService';

const Search = ({ setCityList }) => {
  const [city, setCity] = useState(''); //REVIEW: redundant? just use event in api call
  const [cityWeather, setCityWeather] = useState(undefined);

  const getCityWeather = async (e) => {
    e.preventDefault();

    setCity(e.target.city.value);
    const data = await ApiService.fetchWeather(city);
    setCityWeather(data);
  };

  return (
    <div className="row">
      <div className="col m8">
        <SearchBar
          city={city}
          setCity={setCity}
          getCityWeather={getCityWeather}
        />
        <WeatherListItem weather={cityWeather} />
        {cityWeather ? (
          <SaveCityButton city={city} setCityList={setCityList} />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
