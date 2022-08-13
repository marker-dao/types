const forecast = {
  date: new Date(),
  weather: 'sunny',
}
/**
 * Ex 1
 */
function printWeather1 (forecast: { date: Date, weather: string }): void {
  console.log(forecast.date, forecast.weather)
}
/**
 * Ex 2
 */
function printWeather2 ({ date, weather }: { date: Date, weather: string }): void {
  console.log(date, weather)
}
/**
 * Destructuring
 */
const profile = {
  id: Date.now,
  age: 25,
  coordinates: {
    lat: 1,
    lng: 1,
  },
  setAge (age: number): void {
    this.age = age
  },
}

const { age }: { age: number } = profile
const { coordinates: { lat, lng } }: { coordinates: { lat: number, lng: number } } = profile