import './Gallery.scss'

function Gallery({ photos, alt }) {
  return (
    <section className="gallery">
      <h3 className="gallery__title">Bizning lahzalar</h3>

      <div className="gallery__track">
        {photos.map((src) => (
          <figure className="gallery__item" key={src}>
            <img src={src} alt={alt} loading="lazy" />
          </figure>
        ))}
      </div>

      <p className="gallery__hint">← surib ko'ring →</p>
    </section>
  )
}

export default Gallery