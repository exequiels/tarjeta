import { createContext, useContext, useState } from 'react'
import {
  getInitialTimeContext,
  type TimeContextTypes,
} from '../utils/getInitialTimeContext'

export type TimeContextValues = {
  horaDelDia: TimeContextTypes
  sethoraDelDia: (value: TimeContextTypes) => void
}

const TimeContext = createContext<TimeContextValues>({
  horaDelDia: 'dedia',
  sethoraDelDia: () => {},
})

export const TimeProvider = ({ children }: { children: React.ReactNode }) => {
  const [horaDelDia, sethoraDelDia] = useState<TimeContextTypes>(
    getInitialTimeContext()
  )

  return (
    <TimeContext.Provider value={{ horaDelDia, sethoraDelDia }}>
      {children}
    </TimeContext.Provider>
  )
}

export const useTimeContext = () => useContext(TimeContext)
