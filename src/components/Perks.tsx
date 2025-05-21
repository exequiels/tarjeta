import { useState } from 'react'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'
import config from '../config'

const Perks = () => {
  const [visibleVestimenta, setVisibleVestimenta] = useState(false)
  const [visibleTema, setVisibleTema] = useState(false)
  const [visibleNotas, setVisibleNotas] = useState(false)
  const [cancion, setCancion] = useState('')
  const whatsapp = config.VITE_WHATSAPP
  const mensaje = `¡Hola! Mi canción recomendada para la fiesta es: ${cancion}`

  return (
    <>
      <div className="col-12 md:col-4 centrado" style={{ minHeight: '18rem' }}>
        <div className="border-1 border-round-lg w-full min-h-full p-5">
          <i className="pi pi-user" style={{ fontSize: '2rem' }}></i>
          <h3>Como hay que ir..</h3>
          <Button
            label="Vestimenta"
            onClick={() => setVisibleVestimenta(true)}
          />
          <Dialog
            header="Detalles sobre la vestimenta"
            visible={visibleVestimenta}
            modal
            className="modales text-center"
            onHide={() => setVisibleVestimenta(false)}
          >
            <img src="./images/dresscode256.png"></img>
            <p>Arregladitos que esto no es chamba.</p>
          </Dialog>
        </div>
      </div>

      <div className="col-12 md:col-4 centrado" style={{ minHeight: '18rem' }}>
        <div className="border-1 border-round-lg w-full min-h-full p-5">
          <i className="pi pi-headphones" style={{ fontSize: '2rem' }}></i>
          <h3>La Musica..</h3>
          <Button label="Recomendalo" onClick={() => setVisibleTema(true)} />
          <Dialog
            header="El tema que no puede faltar!!"
            visible={visibleTema}
            modal
            className="modales text-center"
            onHide={() => {
              setVisibleTema(false)
              setCancion('')
            }}
          >
            <InputText
              placeholder="Nombre de la canción"
              value={cancion}
              onChange={(e) => setCancion(e.target.value)}
              className="mt-2"
            />
            <Button
              icon="pi pi-send"
              className="p-button-success ml-1 mt-2"
              onClick={() =>
                window.open(
                  `https://wa.me/${whatsapp}?text=${encodeURIComponent(
                    mensaje
                  )}`,
                  '_blank'
                )
              }
              disabled={cancion.trim().length === 0}
            />
          </Dialog>
        </div>
      </div>

      <div className="col-12 md:col-4 centrado" style={{ minHeight: '18rem' }}>
        <div className="border-1 border-round-lg w-full min-h-full p-5">
          <i className="pi pi-clipboard" style={{ fontSize: '2rem' }}></i>
          <h3>Para tener en cuenta..</h3>
          <Button label="Notas" onClick={() => setVisibleNotas(true)} />
          <Dialog
            header="Notas Importantes"
            visible={visibleNotas}
            modal
            className="modales text-center"
            onHide={() => setVisibleNotas(false)}
          >
            <h4>Venir con buena onda, ganas de pasarla bien y a horario.</h4>
            <i className="pi pi-clock" style={{ fontSize: '5rem' }}></i>
          </Dialog>
        </div>
      </div>
    </>
  )
}

export default Perks
