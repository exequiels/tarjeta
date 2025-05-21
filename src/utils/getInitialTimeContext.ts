export type TimeContextTypes = 'dedia' | 'detarde' | 'denoche'

export function getInitialTimeContext(): TimeContextTypes {
  const hora = new Date().getHours()

  if (hora >= 5 && hora < 12) return 'dedia'
  if (hora >= 12 && hora < 20) return 'detarde'
  return 'denoche'
}
