import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
          <NavLink className='navlink' onClick={closeSidebar} to='/' smooth='true' duration={500} >Home</NavLink>
        </div>
      </section>
    </aside>
  )
}

export default Sidebar