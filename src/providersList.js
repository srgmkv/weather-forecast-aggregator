const providers = [
  {
    providerName: 'WeatherBit',
    hostName: 'http://api.weatherbit.io/v2.0/forecast/daily',
    apiKey: 'ea37e393970247b18d43d2091aa7b95e',
    getUrl: function (location) {
      return `${this.hostName}?city=${location}&key=${this.apiKey}`
    }
  },
  {
    providerName: 'OpenWeatherMap',
    hostName: 'https://api.openweathermap.org/data/2.5/',
    apiKey: '2b0c757f5810cdb1eb3a945f283be600',
    getUrl: function (location) {
      return `${this.hostName}forecast?q=${location}&appid=${this.apiKey}`
    }
  }
]

export const providerList = providers.map(i => i.providerName)

export default providers;