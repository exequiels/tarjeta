import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import config from '../config'

const Regalo = () => {
  const alias = config.VITE_CBU_CVU
  const toast = useRef<Toast>(null)

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(alias)
      .then(() => {
        toast.current?.show({
          severity: 'success',
          summary: 'Alias',
          detail: 'CBU/CVU copiado',
          life: 3000,
        })
      })
      .catch((err) => {
        toast.current?.show({
          severity: 'error',
          summary: 'Error',
          detail: 'No se pudo copiar el CBU/CVU',
          life: 3000,
        })
        console.error('Error al copiar: ', err)
      })
  }

  return (
    <>
      <div className="col-12 centrado" style={{ minHeight: '18rem' }}>
        <div className="text-center border-1 border-round-lg w-full min-h-full p-5">
          <Toast ref={toast} />

          <h3>Regalos</h3>
          <p>Si quieres regalarme algo mas que tu hermosa prescencia..</p>
          <InputText
            value={alias}
            placeholder={alias}
            className="text-center"
          />
          <Button
            icon="pi pi-copy"
            onClick={copyToClipboard}
            tooltip="Copiar"
            tooltipOptions={{ position: 'top' }}
            className="ml-1 mt-2"
          />

          <div className="text-sm text-gray-300 mt-2">
            Haz clic en el botón para copiar el texto.
          </div>
        </div>
      </div>
    </>
  )
}

export default Regalo
