function fetchedDataMapper(dataToMap, providerName) {
  switch (providerName) {
    case 'WeatherBit':
      return WeatherBitMapper(dataToMap);

    case 'OpenWeatherMap':
      return OpenWeatherMapMapper(dataToMap);

    case 'WW-Online':
      return WwOnline(dataToMap);

    default:
      return
  }
}

export default fetchedDataMapper;

function WeatherBitMapper(dataToMap) {
  const items = dataToMap.data
  return items
    .slice(0, 10)
    .map((item) => ({
      date: item.datetime,
      temp: Math.round(item.temp),
      pressure: Math.round(item.pres),
      wind: item.wind_spd.toFixed(1),
      desc: item.weather.description,
      humidity: item.rh
    }))
}

function OpenWeatherMapMapper(dataToMap) {
  const items = dataToMap.list
  return items
    .filter(item => item.dt_txt.includes('15:00:00'))
    .slice(0, 10)
    .map((item) => ({
      date: item.dt_txt.substr(0,10),
      temp: Math.round((item.main.temp - 273)),
      pressure: Math.round(item.main.pressure),
      wind: item.wind.speed.toFixed(1),
      desc: item.weather[0].description,
      humidity: item.main.humidity
    }))
}

function WwOnline(dataToMap) {
  const items = dataToMap.data.weather
  return items
    .map((item) => ({
      date: item.date,
      temp: Math.round(item.avgtempC),
      pressure: item.hourly[4].pressure,
      wind: (item.hourly[4].windspeedKmph / 3.6).toFixed(1),
      desc: item.hourly[4].weatherDesc[0].value,
      humidity: item.hourly[4].humidity
    }))
}