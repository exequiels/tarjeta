const Sabatie = () => {
  const redesSociales = [
    {
      id: 1,
      pipi: 'pi-youtube',
      link: 'https://www.youtube.com/@ExequielsCodetoLife',
    },
    {
      id: 2,
      pipi: 'pi-linkedin',
      link: 'https://www.linkedin.com/in/exequiel-sabatie/',
    },
    { id: 3, pipi: 'pi-github', link: 'https://github.com/exequiels/' },
    {
      id: 4,
      pipi: 'pi-facebook',
      link: 'https://www.facebook.com/sabatie.dev',
    },
    {
      id: 5,
      pipi: 'pi-instagram',
      link: 'https://www.instagram.com/sabatie.dev',
    },
  ]

  return (
    <>
      <div className="col-12 centrado">
        <div className="border-1 border-round-lg w-full min-h-full p-5 col-12 centrado bg-blue-900">
          © 2025 Exequiel Sabatie. All rights reserved. Desarrollado por
          <a href="https://sabatie.com.ar" target="_blank">
            Sabatie
          </a>
          <div className="mt-4 flex gap-4">
            {redesSociales.map((pi) => (
              <a href={pi.link} target="_blank">
                <i
                  className={`pi ${pi.pipi}`}
                  style={{ fontSize: '1.5rem' }}
                ></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sabatie
