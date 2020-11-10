import React, { useState } from 'react';

import SearchBar from '../components/SearchBarComponent';
import SearchResult from '../components/SearchResult';

const Search = () => {
  const [city, setCity] = useState(''); //REVIEW: redundant? just use event in api call
  const [cityWeather, setCityWeather] = useState(undefined);

  const getCityWeather = async (e) => {
    e.preventDefault();

    setCity(e.target.city.value);
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8ff99047cb9ea5a17b8fb164145df50c`
    ).then((res) => res.json());
    console.log(data);
    setCityWeather(data);
  };

  return (
    <div>
      <SearchBar
        city={city}
        setCity={setCity}
        getCityWeather={getCityWeather}
      />
      {cityWeather ? <SearchResult searchResult={cityWeather} /> : null}
    </div>
  );
};

export default Search;
