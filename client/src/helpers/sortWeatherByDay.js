const sortWeatherByDay = (weather) => {
  const weatherSortedByDay = [[], [], [], [], [], []];
  if (weather) {
    let currentDay;
    let split = 0;
    for (let i = 0; i < 6; i++) {
      let day = [];
      for (let j = split; j < weather.list.length; j++) {
        if (currentDay === new Date(weather.list[j].dt * 1000).getDay()) {
          day.push(weather.list[j]);
        } else if (currentDay === undefined) {
          currentDay = new Date(weather.list[j].dt * 1000).getDay();
          day.push(weather.list[j]);
        } else {
          currentDay = new Date(weather.list[j].dt * 1000).getDay();
          split = j;
          break;
        }
      }
      weatherSortedByDay[i] = day;
    }
  }
  /*if user checks weather between 21:00 and 00:00 the function
  will return an array with the last two elements identical*/
  if (weatherSortedByDay[0].length === 8) {
    weatherSortedByDay.pop();
  }
  return weatherSortedByDay;
};

export default sortWeatherByDay;
