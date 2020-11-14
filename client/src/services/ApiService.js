const BASE_URL = process.env.SERVER_URL;

const fetchWeather = async (city) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.OWM_API_KEY}`
  ).then((res) => res.json());
};

const getUserId = async () => {
  const testUserId = await fetch(`${BASE_URL}/user`).then((res) => res.json());
  return testUserId;
};

const getCities = async (userId) => {
  const cities = await fetch(
    `${BASE_URL}/cities?userId=${userId}`
  ).then((res) => res.json());
  return cities;
};

const postCity = async (userId, city) => {
  return fetch(`${BASE_URL}/cities`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId, city: city }),
  }).then((res) => res.json());
};

module.exports = {
  fetchWeather,
  getUserId,
  getCities,
  postCity,
};
