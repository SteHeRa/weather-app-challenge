import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import WeatherList from './containers/WeatherList';
import Search from './containers/Search';
import ApiService from './services/ApiService';

const App = () => {
  const [testUserId, setTestUserId] = useState(undefined);
  const [cityList, setCityList] = useState([]);

  const getUserId = async () => {
    const id = await ApiService.getUserId();
    await setTestUserId(id);
  };

  const getCityList = async (userId) => {
    const res = await ApiService.getCities(userId);
    setCityList(res);
  };

  useEffect(() => {
    getUserId();
    if (testUserId) {
      getCityList(testUserId);
    }
  }, [testUserId]);

  return (
    <React.StrictMode>
      {testUserId ? (
        <div className="container">
          <Search
            testUserId={testUserId}
            cityList={cityList}
            setCityList={setCityList}
          />
          <WeatherList cityList={cityList} />
        </div>
      ) : null}
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
