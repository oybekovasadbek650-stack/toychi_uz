import Background from './Background.jsx'
import './Envelope.scss'

function Envelope({ groomName, brideName, dateText, cover, opened, onOpen }) {
  return (
    <div className={opened ? 'envelope envelope--opened' : 'envelope'}>
      <Background image={cover} variant="envelope" />

      <div className="envelope__card">
        <p className="envelope__small">Sizga taklifnoma keldi</p>
        <h2 className="envelope__names">
          {groomName} <span>&</span> {brideName}
        </h2>
        <div className="envelope__line" />
        <p className="envelope__date">{dateText}</p>

        <button className="envelope__seal" onClick={onOpen} aria-label="Taklifnomani ochish">
          {groomName[0]}
          {brideName[0]}
        </button>

        <p className="envelope__hint">Ochish uchun muhrni bosing</p>
      </div>
    </div>
  )
}

export default Envelope