import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { useState } from 'react'
import config from '../config'
import { parseDate } from '../utils/Cumple'

const Lugar = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const phoneNumber = config.VITE_WHATSAPP
  const ubicacion = config.VITE_LOCATION
  const mensaje = '¡Confirmo que voy al evento! 🎉'

  const getTargetDate = () => parseDate(config.VITE_CUMPLE)

  const formatDate = (date: Date): string => {
    const formatted = date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

    return formatted.charAt(0).toUpperCase() + formatted.slice(1)
  }

  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      <span className="font-bold white-space-nowrap">Salon Cumple</span>
    </div>
  )

  const footerContent = (
    <div>
      <Button
        label="Abrir en Google Maps"
        icon="pi pi-map"
        onClick={() =>
          window.open(`https://www.google.com/maps?q=${ubicacion}`, '_blank')
        }
      />
    </div>
  )

  return (
    <>
      <div className="col-0 md:col-4"></div>
      <div
        className="col-12 md:col-4 flex flex-column centrado"
        style={{ minHeight: '800px', height: '100%' }}
      >
        <div className="border-1 border-round-lg w-full min-h-full p-5 centrado">
          <div className="w-full flex-1 p-3 centrado">
            <i className="pi pi-sparkles" style={{ fontSize: '2rem' }}></i>
            <h3>Festejemos!!</h3>
          </div>
          <hr className="divider-centered divider-dashed" />
          <div className="w-full flex-1 p-3 centrado">
            <h3>Donde?</h3>
            <p className="mt-0">
              Salon Brisas Verdes 123, Calle Monte Sano 456.
            </p>
            <Button
              label="Ver Ubicacion"
              icon="pi pi-external-link"
              onClick={() => setVisible(true)}
            />
            <Dialog
              visible={visible}
              modal
              header={headerElement}
              footer={footerContent}
              className="modales"
              onHide={() => {
                if (!visible) return
                setVisible(false)
              }}
            >
              <iframe
                title="Ubicación"
                src={`https://www.google.com/maps?q=${ubicacion}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Dialog>
          </div>
          <hr className="divider-centered divider-dashed" />
          <div className="w-full flex-1 p-3 centrado">
            <h3>Cuando?</h3>
            <div className="mt-5">{formatDate(getTargetDate())}</div>
          </div>
          <hr className="divider-centered divider-dashed" />
          <div className="w-full flex-1 p-3 centrado">
            <h3>Vas a ir?</h3>
            <Button
              label="Confirmar asistencia"
              icon="pi pi-check"
              onClick={() =>
                window.open(
                  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    mensaje
                  )}`,
                  '_blank'
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="col-0 md:col-4"></div>
    </>
  )
}

export default Lugar
