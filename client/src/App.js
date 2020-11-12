import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import WeatherList from './containers/WeatherList';
import Search from './containers/Search';

const App = () => {
  const [cityList, setCityList] = useState([]);

  return (
    <React.StrictMode>
      <div>
        <Search setCityList={setCityList} />
        <WeatherList cityList={cityList} />
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
