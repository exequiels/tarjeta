import { useTimeContext } from '../context/TimeContext'

const Header = () => {
  const { horaDelDia } = useTimeContext()

  const getSaludo = (time: string) => {
    switch (time) {
      case 'dedia':
        return 'Buenos días, gracias por pasar por acá.'
      case 'detarde':
        return 'Buenas tardes, falta menos para el gran día.'
      case 'denoche':
        return 'Buenas noches, ya se acerca una fecha especial.'
      default:
        return 'Gracias por estar por acá con tiempo.'
    }
  }

  const saludo = getSaludo(horaDelDia)

  return (
    <>
      <div className="col-12 md:col-6">
        <div className="border-1 border-round-lg bg-foto">
          <figure>
            <img
              src="./images/exequiel.jpg"
              alt="Exequiel Sabatié"
              className="block md:mr-auto border-round"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
              }}
              title="Exe"
            />
            <figcaption>Test</figcaption>
          </figure>
        </div>
      </div>
      <div className="col-12 md:col-6">
        <div className="border-round-lg min-h-full border-1 centrado">
          <div className="block text-2xl font-bold mb-1 mt-5 md:mt-0">
            {saludo}
          </div>
          <hr className="divider-centered divider-dashed" />
          <div>01.05.1984</div>
          <hr className="divider-centered divider-dashed" />
          <div className="block text-6xl font-bold mb-1">XLI</div>
          <div className="block text-6xl font-bold mb-1">Exequiel Sabatié</div>
          <hr className="divider-centered divider-dashed" />
          <div className="">Mis 42 años</div>
          <div className="mt-3">
            Me gusta la idea de celebrar con tiempo. ¡Te espero para hacerlo
            juntos cuando llegue el día!
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
