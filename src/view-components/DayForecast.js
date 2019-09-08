import React from 'react';

const DayForecastBlock = ({ item }) => {
  return (
    <div className="weather-indicators">
      <div>date: {item.date}</div>
      <div>T: {item.temp}</div>
      <div>P: {item.pressure}</div>
      <div>W: {item.wind}</div>
      <div>H: {item.humidity}</div>
      <div>Desc: {item.desc}</div>
    </div>
  )
}

export default DayForecastBlock