import { Galleria } from 'primereact/galleria'

interface ImageItem {
  itemImageSrc: string
  thumbnailImageSrc: string
  alt: string
  title: string
}

const Galeria = () => {
  const imageData: ImageItem[] = [
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria1s.jpg',
      alt: 'Descripción de la imagen 1',
      title: 'Título 1',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria2.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria2s.jpg',
      alt: 'Descripción de la imagen 2',
      title: 'Título 2',
    },
    {
      itemImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria3.jpg',
      thumbnailImageSrc:
        'https://primefaces.org/cdn/primereact/images/galleria/galleria3s.jpg',
      alt: 'Descripción de la imagen 3',
      title: 'Título 3',
    },
  ]

  const itemTemplate = (item: {
    itemImageSrc: string | undefined
    alt: string | undefined
  }) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: '100%', display: 'block', borderRadius: '12px' }}
      />
    )
  }

  return (
    <div className="col-12">
      <div className="border-1 border-round-lg w-full min-h-full p-5 centrado">
        <h3>Un Recorrido por mi vida.</h3>
        <Galleria
          value={imageData}
          style={{ maxWidth: '640px' }}
          changeItemOnIndicatorHover
          showThumbnails={false}
          showIndicators
          showItemNavigators
          item={itemTemplate}
        />
      </div>
    </div>
  )
}

export default Galeria
