import React, { useState } from 'react';

import SearchBar from '../components/SearchBarComponent';
import WeatherListItem from '../components/WeatherListItem';

const Search = () => {
  const [city, setCity] = useState(''); //REVIEW: redundant? just use event in api call
  const [cityWeather, setCityWeather] = useState(undefined);

  const getCityWeather = async (e) => {
    e.preventDefault();

    setCity(e.target.city.value);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.OWM_API_KEY}`
    ).then((res) => res.json());
    console.log(data);
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
      </div>
    </div>
  );
};

export default Search;
