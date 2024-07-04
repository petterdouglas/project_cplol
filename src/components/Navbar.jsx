import {NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import '../styles/components/navbar.sass'

const Navbar = ({ setBar, nonActive }) => {

  const showSidebar = () => {
    setBar(!nonActive)
  }

  return (
    <nav>
      <div className="title_container">
        <img className='logo' src="src/assets/cplol-icon.webp" alt="" />
        <NavLink className='title' to='/'>CPLOL</NavLink>
      </div>
      {nonActive ? null : <FaBars className='bar' onClick={showSidebar} />}
    </nav>
  )
}

export default Navbar