import './Hero.scss'

function Hero({ groomName, brideName, dateText, visible }) {
  return (
    <section className={visible ? 'hero hero--visible' : 'hero'}>
      <div className="hero__content">
        <div className="hero__ornament">✦</div>
        <p className="hero__small">Nikoh to'yiga taklifnoma</p>
        <h1 className="hero__names">
          <span>{groomName}</span>
          <span className="hero__amp">&</span>
          <span>{brideName}</span>
        </h1>
        <div className="hero__line"></div>
        <p className="hero__date">{dateText}</p>
        <div className="hero__ornament">✦</div>
      </div>
    </section>
  )
}

export default Hero