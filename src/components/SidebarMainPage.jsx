import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

const Sidebar = ({ active, setBar }) => {

  const sidebarRef = useRef(null)

  const closeSidebar = () => {
    setBar(!active)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setBar(false)
      }
    }
    console.log('ativei')
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setBar])


  return (
    <aside ref={sidebarRef}>
      <div className="btn_container">
        {active && <FaTimes className='bar' onClick={closeSidebar} />}
      </div>
      <section className='aside_contents'>
        <div>
          <Link onClick={closeSidebar} to='home' smooth='true' duration={100} offset={-70}>Home</Link>
        </div>
        <div>
          <Link onClick={closeSidebar} to='awards' smooth='true' duration={100} offset={-40}>Premiações</Link>
        </div>
        <div>
          <Link onClick={closeSidebar} to='schedule' smooth='true' duration={100} offset={-40}>Programação</Link>
        </div>
        <div>
          <Link onClick={closeSidebar} to='howpage' smooth='true' duration={100} offset={-40}>Funcionamento</Link>
        </div>
        <div>
          <NavLink className='navlink' onClick={closeSidebar} to='form' smooth='true' duration={100} >Quero me inscrever</NavLink>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar