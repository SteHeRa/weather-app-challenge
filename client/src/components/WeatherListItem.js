import React, { useState, useEffect } from 'react';
import WeatherListItemContent from './WeatherListItemContent';
import useDropdown from '../hooks/useDropdown';
import dayjs from 'dayjs';

const WeatherListItem = ({ weather }) => {
  const [days, setDays] = useState([]);
  const [day, DayDropdown] = useDropdown('Day', 0, days);
  const [hours, setHours] = useState([]);
  const [time, TimeDropdown] = useDropdown('Time', 0, hours);

  useEffect(() => {
    if (weather) {
      setDays(
        weather.weather.map((day) =>
          dayjs(day[0].dt * 1000).format('ddd DD-MMM-YYYY')
        )
      );
      setHours(
        weather.weather[day].map((time) =>
          dayjs(time.dt * 1000).format('HH:mm')
        )
      );
    }
  }, [day, weather]);

  return weather ? (
    <div className="col s3 m4">
      <div className="card blue-grey lighten-4">
        <div className="card-title">
          <span>{weather.name}</span>
        </div>
        <div>
          <DayDropdown />
          <TimeDropdown />
        </div>
        <WeatherListItemContent weather={weather.weather[day][time]} />
      </div>
    </div>
  ) : null;
};

export default WeatherListItem;
