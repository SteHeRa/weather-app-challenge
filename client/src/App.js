import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import WeatherList from './containers/WeatherList';
import Search from './containers/Search';
import ApiService from './services/ApiService';

const App = () => {
  const [cityList, setCityList] = useState([]);

  const getCityList = async (userId) => {
    const res = await ApiService.getCities(userId);
    setCityList(res);
  };

  useEffect(() => {
    getCityList(process.env.TEST_USER_ID);
  }, []);

  return (
    <React.StrictMode>
      <div className="container">
        <Search setCityList={setCityList} />
        <WeatherList cityList={cityList} />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
