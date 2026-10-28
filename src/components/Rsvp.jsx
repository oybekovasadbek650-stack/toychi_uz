import { useState } from 'react'
import './Rsvp.scss'

function Rsvp() {
  const [status, setStatus] = useState('idle')
  const [attending, setAttending] = useState(true)
  const [guests, setGuests] = useState(1)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const name = new FormData(e.target).get('ism')

    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attending, guests }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <section className="rsvp">
        <div className="rsvp__card rsvp__done">
          <div className="rsvp__check">✓</div>
          <h3 className="rsvp__title">Rahmat!</h3>
          <p>{attending ? "Sizni to'yimizda kutib qolamiz 🤍" : 'Javobingiz uchun rahmat 🤍'}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="rsvp">
      <h3 className="rsvp__title">Kelishingizni tasdiqlang</h3>
      <p className="rsvp__subtitle">Iltimos, javobingizni oldindan bildiring</p>

      <form className="rsvp__card" onSubmit={handleSubmit}>
        <label className="rsvp__field">
          <input name="ism" placeholder=" " maxLength={100} required />
          <span>Ismingiz</span>
        </label>

        <div className="rsvp__choice">
          <button
            type="button"
            className={attending ? 'active' : ''}
            onClick={() => setAttending(true)}
          >
            <span>🥂</span>
            Albatta kelaman
          </button>
          <button
            type="button"
            className={!attending ? 'active' : ''}
            onClick={() => setAttending(false)}
          >
            <span>😔</span>
            Kela olmayman
          </button>
        </div>

        {attending && (
          <div className="rsvp__guests">
            <span>Necha kishi kelasiz?</span>
            <div className="rsvp__stepper">
              <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))}>−</button>
              <b>{guests}</b>
              <button type="button" onClick={() => setGuests((g) => Math.min(10, g + 1))}>+</button>
            </div>
          </div>
        )}

        <button className="rsvp__submit" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Yuborilmoqda...' : 'Javobni yuborish'}
        </button>

        {status === 'error' && (
          <p className="rsvp__error">Xatolik yuz berdi, qayta urinib ko'ring</p>
        )}
      </form>
    </section>
  )
}

export default Rsvp