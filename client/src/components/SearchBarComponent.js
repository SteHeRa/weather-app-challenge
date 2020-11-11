import React from 'react';

const SearchBar = ({ city, setCity, getCityWeather }) => {
  return (
    <div>
      <form onSubmit={(e) => getCityWeather(e)}>
        <label htmlFor="city">
          <div className="input-field col s6">
            <i className="material-icons prefix">search</i>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search for city.."
            ></input>
          </div>
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
