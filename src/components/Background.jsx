import './Background.scss'

const lights = Array.from({ length: 14 }, (_, i) => ({
  x: (i * 37) % 100,
  size: 6 + ((i * 7) % 14),
  duration: 9 + ((i * 5) % 9),
  delay: (i * 1.3) % 10,
}))

function Background({ image, variant = 'page' }) {
  return (
    <div className={`background background--${variant}`}>
      <div className="background__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="background__overlay" />

      {lights.map((l, i) => (
        <span
          key={i}
          className="background__light"
          style={{
            '--x': `${l.x}%`,
            '--s': `${l.size}px`,
            '--d': `${l.duration}s`,
            '--delay': `${l.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Background