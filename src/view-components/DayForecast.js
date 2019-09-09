import React from 'react';

const DayForecastBlock = ({ item, day, month }) => {
  return (
    <div className="weather-indicators">
      <div className="date">{day} {month}  </div>
      <div className="temp">{item.temp}°C</div>
      <div className="press"><span>P, hpa:</span> {item.pressure}</div>
      <div className="wind"><span>W, m/s:</span>  {item.wind}</div>
      <div className="hum"><span>H, %:</span>  {item.humidity}</div>
      <div className="desc">{item.desc}</div>
    </div>
  )
}

export default DayForecastBlock