

export const urlParts = {
  1: {
    hostName: 'http://api.weatherbit.io/v2.0/forecast/daily',
    apiKey: 'ea37e393970247b18d43d2091aa7b95e',
    '10Days': function (location) {
      return `${this.hostName}?city=${location}&key=${this.apiKey}`
    }
  },
  2: {}
}