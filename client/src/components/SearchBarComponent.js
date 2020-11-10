import React from 'react';

const SearchBar = ({ city, setCity, getCityWeather }) => {
  return (
    <div>
      <form onSubmit={(e) => getCityWeather(e)}>
        <label htmlFor="city">
          Find City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></input>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
