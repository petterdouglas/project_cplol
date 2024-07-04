import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import SidebarMainPage from './components/SidebarMainPage'
import SidebarForm from './components/SidebarForm'
import Contacts from './components/Contacts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './styles/app.sass'


function App() {

  const location = useLocation()
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const renderSidebar = () => {
    if (location.pathname === "/") {
      return (<SidebarMainPage active={sidebar} setBar={setSidebar} />)
    } else {
      return (<SidebarForm active={sidebar} setBar={setSidebar} />)
    }
  }

  return (
    <>
      <Navbar setBar={setSidebar} nonActive={sidebar} />
      {sidebar == true && renderSidebar()}
      <main>
        <Outlet />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
