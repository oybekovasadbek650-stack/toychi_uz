import { useState } from 'react'
import './MusicButton.scss'

function MusicButton({ src, audioRef }) {
  const [playing, setPlaying] = useState(false)

  function toggle() {
    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        loop
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        className={playing ? 'music-btn music-btn--playing' : 'music-btn'}
        onClick={toggle}
        aria-label="Musiqa"
      >
        ♪
      </button>
    </>
  )
}

export default MusicButton