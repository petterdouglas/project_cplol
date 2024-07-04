import { NavLink } from 'react-router-dom'

import '../styles/components/contacts.sass'

const Contacts = () => {
  return (
    <section className="contacts_container" id='contacts'>
      <div className="contacts_contents">
        <div className="contacts_contents-title"><h1></h1>Entre em contato</div>
        <div className="contacts-icons_container">
          <a href='#' className='contacts_icons'><img src="src/assets/whats-icon.png" alt="whatsapp" /></a>
          <a href='https://www.instagram.com/cplol.oficial/' className='contacts_icons'><img src="src/assets/insta-icon.png" alt="instagram" /></a>
          <a href='https://www.twitch.tv/cplol2024' className='contacts_icons'><img src="src/assets/twitch-icon.png" alt="twitch" /></a>
        </div>
      </div>
    </section>
  )
}

export default Contacts