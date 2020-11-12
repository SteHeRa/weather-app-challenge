const fetchWeather = (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.OWM_API_KEY}`
  ).then((res) => res.json());
};

module.exports = {
  fetchWeather,
};
