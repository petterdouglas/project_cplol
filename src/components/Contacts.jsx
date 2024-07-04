import { NavLink } from 'react-router-dom'

import '../styles/components/contacts.sass'

import bgContacts from '../assets/bg.png'
import twitch from '../assets/twitch-icon.png'
import instagram from '../assets/insta-icon.png'
import whatsapp from '../assets/whats-icon.png'

const Contacts = () => {
  return (
    <section className="contacts_container" style={{backgroundImage: `url(${bgContacts})`}} id='contacts'>
      <div className="contacts_contents">
        <div className="contacts_contents-title"><h1></h1>Entre em contato</div>
        <div className="contacts-icons_container">
          <a href='#' className='contacts_icons'><img src={whatsapp} alt="whatsapp" /></a>
          <a href='https://www.instagram.com/cplol.oficial/' className='contacts_icons'><img src={instagram} alt="instagram" /></a>
          <a href='https://www.twitch.tv/cplol2024' className='contacts_icons'><img src={twitch} alt="twitch" /></a>
        </div>
      </div>
    </section>
  )
}

export default Contacts