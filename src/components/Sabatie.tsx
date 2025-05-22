const Sabatie = () => {
  return (
    <>
      <div className="col-12">
        <div className="border-1 border-round-lg w-full min-h-full bg-blue-900 flex flex-column md:flex-row justify-content-center md:justify-content-between align-items-center p-3">
          <div className="mb-2 md:mb-0 flex gap-1">
            © 2025 Exequiel
            <a
              href="https://sabatie.com.ar"
              target="_blank"
              className="underline"
            >
              Sabatie
            </a>
          </div>
          <div className="flex gap-2 align-items-center">
            ¿Necesitás una tarjeta?
            <a
              href="https://wa.me/5494444444444?text=Hola%2C%20te%20hablo%20por%20las%20tarjetas%20de%20cumplea%C3%B1os%20personalizadas!!!"
              target="_blank"
            >
              <i className="pi pi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sabatie
