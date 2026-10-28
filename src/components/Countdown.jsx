import { useState, useEffect } from 'react'
import './Countdown.scss'

function getTimeLeft(date) {
  const diff = Math.max(0, new Date(date) - Date.now())
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    mins: Math.floor((diff / 60000) % 60),
    secs: Math.floor((diff / 1000) % 60),
  }
}

// Bitta halqa
function Ring({ value, max, label }) {
  const r = 34
  const circumference = 2 * Math.PI * r
  const progress = Math.min(value / max, 1)

  return (
    <div className="countdown__item">
      <svg viewBox="0 0 80 80">
        <circle className="countdown__track" cx="40" cy="40" r={r} />
        <circle
          className="countdown__bar"
          cx="40"
          cy="40"
          r={r}
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
        />
      </svg>
      <b key={value}>{value}</b>
      <span>{label}</span>
    </div>
  )
}

function Countdown({ date, dateText }) {
  const [time, setTime] = useState(getTimeLeft(date))

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft(date)), 1000)
    return () => clearInterval(timer)
  }, [date])

  return (
    <section className="countdown">
      <h3 className="countdown__title">To'yimizgacha qoldi</h3>
      <p className="countdown__subtitle">{dateText}</p>

      <div className="countdown__card">
        <Ring value={time.days} max={365} label="kun" />
        <Ring value={time.hours} max={24} label="soat" />
        <Ring value={time.mins} max={60} label="daqiqa" />
        <Ring value={time.secs} max={60} label="soniya" />
      </div>
    </section>
  )
}

export default Countdown