import './Location.scss'

const icons = {
  venue: (
    <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V10m14 11V10M9 21v-6h6v6M2 10l10-6 10 6" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
  ),
  date: (
    <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4m8-4v4" /></svg>
  ),
}

function Location({ venue, address, dateText, lat, lng }) {
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`
  const yandexUrl = `https://yandex.uz/maps/?pt=${lng},${lat}&z=17&l=map`
  const googleUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  const rows = [
    { icon: icons.venue, label: "To'yxona", value: venue, big: true },
    { icon: icons.pin, label: 'Manzil', value: address },
    { icon: icons.date, label: 'Sana va vaqt', value: dateText },
  ]

  return (
    <section className="location">
      <h3 className="location__title">Qayerda va qachon</h3>
      <p className="location__subtitle">Sizni shu manzilda kutamiz</p>

      <div className="location__card">
        <div className="location__map">
          <iframe src={mapSrc} loading="lazy" title="Xarita" />
        </div>

        <ul className="location__list">
          {rows.map((row) => (
            <li className="location__row" key={row.label}>
              <span className="location__icon">{row.icon}</span>
              <div>
                <small>{row.label}</small>
                <p className={row.big ? 'location__venue' : ''}>{row.value}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="location__btns">
          <a className="location__btn location__btn--fill" href={yandexUrl} target="_blank" rel="noopener">
            Yandex xarita
          </a>
          <a className="location__btn" href={googleUrl} target="_blank" rel="noopener">
            Google xarita
          </a>
        </div>
      </div>
    </section>
  )
}

export default Location