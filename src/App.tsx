import { useEffect } from 'react'
import 'primereact/resources/themes/soho-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { useTimeContext } from './context/TimeContext'
import { PrimeReactProvider } from 'primereact/api'
import Layout from './components/Layout'
import Lugar from './components/Lugar'
import Galeria from './components/Galeria'
import Header from './components/Header'
import Perks from './components/Perks'
import Faltan from './components/Faltan'
import Regalo from './components/Regalo'
import Footer from './components/Footer'
import Sabatie from './components/Sabatie'

function App() {
  const value = {
    ripple: true,
  }

  const { horaDelDia } = useTimeContext()

  useEffect(() => {
    document.body.classList.remove('dedia', 'detarde', 'denoche')
    document.body.classList.add(horaDelDia)
  }, [horaDelDia])

  return (
    <>
      <PrimeReactProvider value={value}>
        <Layout>
          <Header />
          <Faltan />
          <Lugar />
          <Galeria />
          <Perks />
          <Regalo />
          <Footer />
          <Sabatie />
        </Layout>
      </PrimeReactProvider>
    </>
  )
}

export default App
