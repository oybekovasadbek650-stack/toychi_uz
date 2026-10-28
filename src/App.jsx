import { useState, useRef, useEffect } from 'react'
import toy from './data/toy.js'
import Background from './components/Background.jsx'
import Envelope from './components/Envelope.jsx'
import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import MusicButton from './components/MusicButton.jsx'
import Reveal from './components/Reveal.jsx'

function App() {
  const [opened, setOpened] = useState(false)
  const audioRef = useRef(null)

  // Konvert yopiq turganda sahifa scroll bo'lmasin
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  function handleOpen() {
    setOpened(true)
    audioRef.current?.play()
  }

  return (
    <>
      <Background image={toy.cover} />

      <Envelope
        groomName={toy.groomName}
        brideName={toy.brideName}
        dateText={toy.dateText}
        cover={toy.cover}
        opened={opened}
        onOpen={handleOpen}
      />

      <Hero
        groomName={toy.groomName}
        brideName={toy.brideName}
        dateText={toy.dateText}
        visible={opened}
      />

      <Reveal>
        <Countdown date={toy.date} dateText={toy.dateText} />
      </Reveal>

      {toy.photos?.length > 0 && (
        <Reveal>
          <Gallery photos={toy.photos} alt={`${toy.groomName} va ${toy.brideName}`} />
        </Reveal>
      )}

      <Reveal>
        <Location
          venue={toy.venue}
          address={toy.address}
          dateText={toy.dateText}
          lat={toy.lat}
          lng={toy.lng}
        />
      </Reveal>

      <Reveal>
        <Rsvp />
      </Reveal>

      <Footer groomName={toy.groomName} brideName={toy.brideName} />

      {toy.music && <MusicButton src={toy.music} audioRef={audioRef} />}
    </>
  )
}

export default App  