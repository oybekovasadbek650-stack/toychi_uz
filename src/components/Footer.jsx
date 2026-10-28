import './Footer.scss'

const AUTHOR = {
  text: 'Taklifnoma muallifi: @toychi_uz',
  link: 'https://t.me/toychi_uz',
}

function Footer({ groomName, brideName }) {
  return (
    <footer className="footer">
      <p className="footer__names">
        {groomName} & {brideName}
      </p>
      <p className="footer__thanks">Sizni kutib qolamiz! 🤍</p>
      <a className="footer__author" href={AUTHOR.link} target="_blank" rel="noopener">
        {AUTHOR.text}
      </a>
    </footer>
  )
}

export default Footer