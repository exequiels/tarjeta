import { useEffect, useState } from 'react'
import config from '../config'
import { parseDate } from './Cumple'

const getTargetDate = () => parseDate(config.VITE_CUMPLE)

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +getTargetDate() - +new Date()
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <div className="flex gap-4 justify-content-center text-2xl mt-4">
        <div>
          <strong>{timeLeft.days}</strong> días
        </div>
        <div>
          <strong>{timeLeft.hours}</strong> h
        </div>
        <div>
          <strong>{timeLeft.minutes}</strong> min
        </div>
        <div>
          <strong>{timeLeft.seconds}</strong> s
        </div>
      </div>
      <div className="mt-5">
        Para el{' '}
        {getTargetDate().toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
    </>
  )
}

export default Countdown
