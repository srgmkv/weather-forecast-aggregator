//Данные о провайдерах и их АПИ
const providersApiSpec = {
  WeatherBit: {
    providerName: 'WeatherBit',
    hostName: 'http://api.weatherbit.io/v2.0/forecast/daily',
    apiKey: 'ea37e393970247b18d43d2091aa7b95e',
    getUrl: function (location) {
      return `${this.hostName}?city=${location}&key=${this.apiKey}`
    }
  },
  OpenWeather: {
    providerName: 'OpenWeather',
    hostName: 'https://api.openweathermap.org/data/2.5/forecast',
    apiKey: '2b0c757f5810cdb1eb3a945f283be600',
    getUrl: function (location) {
      return `${this.hostName}?q=${location}&appid=${this.apiKey}`
    }
  },
  WW_Online: {
    providerName: 'WW_Online',
    hostName: 'http://api.worldweatheronline.com/premium/v1/weather.ashx',
    apiKey: 'f87c5c2e9e064353a1180848190709',
    getUrl: function (location) {
      return `${this.hostName}?q=${location}&key=${this.apiKey}&format=json&num_of_days=10`
    }
  }
}

export default providersApiSpec;

//объект со тескстовыми названиями провайдеров
let providersName = {};

(() => {
  let prop;
  for (prop in providersApiSpec) {
    providersName[prop] = providersApiSpec[prop].providerName
  }
})()

export { providersName }