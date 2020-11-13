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

  const saveCity = async () => {
    const res = await ApiService.postCity(process.env.TEST_USER_ID, city);
    if (res) {
      setCityList((old) => [...old, city]);
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
        </div>
      </div>
    </div>
  );
};

export default Search;
