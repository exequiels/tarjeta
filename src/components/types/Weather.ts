interface WeatherCondition {
  text: string
  icon: string
  code: number
}

interface CurrentWeather {
  temp_c: number
  condition: WeatherCondition
}

interface Location {
  name: string
  country: string
  region: string
}

interface WeatherAPIResponseCurrent {
  location: Location
  current: CurrentWeather
}

interface DayForecast {
  avgtemp_c: number
  condition: WeatherCondition
}

interface ForecastDay {
  date: string
  day: DayForecast
}

interface WeatherAPIResponseForecast {
  forecast: {
    forecastday: ForecastDay[]
  }
}

export type {
  WeatherCondition,
  CurrentWeather,
  Location,
  WeatherAPIResponseCurrent,
  DayForecast,
  ForecastDay,
  WeatherAPIResponseForecast,
}
