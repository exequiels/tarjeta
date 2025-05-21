import { useEffect, useState } from 'react'
import config from '../config'
import type {
  WeatherAPIResponseCurrent,
  WeatherAPIResponseForecast,
} from './types/Weather'

const Footer = () => {
  const [currentWeather, setCurrentWeather] =
    useState<WeatherAPIResponseCurrent | null>(null)
  const [birthdayWeather, setBirthdayWeather] =
    useState<WeatherAPIResponseForecast | null>(null)

  const birthdayDate = config.VITE_CUMPLE
  const location = config.VITE_LOCATION

  const getDaysUntilBirthday = (birthday: string): number => {
    const today = new Date()
    const nextBirthday = new Date(birthday)
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1)
    }
    const diff = nextBirthday.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 3600 * 24))
  }

  useEffect(() => {
    const apiKey = config.VITE_CLIMA_API_KEY
    const daysUntil = getDaysUntilBirthday(birthdayDate)

    const fetchCurrent = async () => {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&lang=es`
      )
      const data: WeatherAPIResponseCurrent = await res.json()
      setCurrentWeather(data)
    }

    const fetchBirthdayForecast = async () => {
      if (daysUntil <= 14) {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&dt=${birthdayDate}&lang=es`
        )
        const data: WeatherAPIResponseForecast = await res.json()
        setBirthdayWeather(data)
      }
    }

    fetchCurrent()
    fetchBirthdayForecast()
  }, [])

  return (
    <>
      <div className="flex flex-wrap">
        <div className="col-12 md:col-6 flex-order-2 md:flex-order-1">
          <div className="border-round-lg min-h-full border-1 centrado">
            <hr className="divider-centered divider-dashed" />
            <div className="block text-6xl font-bold mb-1">XLI</div>
            <div className="block text-6xl font-bold mb-1">
              Exequiel Sabatié
            </div>
            <hr className="divider-centered divider-dashed" />
          </div>
        </div>
        <div className="col-12 md:col-6 flex-order-1 md:flex-order-2">
          <div className="border-round-lg min-h-full border-1 centrado">
            {currentWeather && (
              <p>
                <img
                  src={`https:${currentWeather.current.condition.icon}`}
                  alt={currentWeather.current.condition.text}
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Clima actual en {currentWeather.location.name}:{' '}
                {currentWeather.current.temp_c}°C,{' '}
                {currentWeather.current.condition.text}
              </p>
            )}
            {birthdayWeather ? (
              <p>
                <img
                  src={`https:${birthdayWeather.forecast.forecastday[0].day.condition.icon}`}
                  alt={
                    birthdayWeather.forecast.forecastday[0].day.condition.text
                  }
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                />
                Clima en tu cumple:{' '}
                {birthdayWeather.forecast.forecastday[0].day.avgtemp_c}°C,{' '}
                {birthdayWeather.forecast.forecastday[0].day.condition.text}
              </p>
            ) : (
              <p>
                “Revisá esta tarjeta unos días antes de mi cumple para ver cómo
                estará el clima.”
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
