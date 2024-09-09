import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import '../styles/components/navbar.sass'

import logo from '../assets/cplol-icon.webp'

const Navbar = ({ setBar, nonActive }) => {

  const showSidebar = () => {
    setBar(!nonActive)
  }

  return (
    <nav>
      <div className="title_container">
        <img className='logo' src={logo} alt="" />
        <NavLink className='title' to='/'>CPLOL</NavLink>
      </div>
      {nonActive ? null : <FaBars className='bar' onClick={showSidebar} />}
    </nav>
  )
}

export default Navbar