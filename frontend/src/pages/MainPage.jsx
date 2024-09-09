import { useEffect } from 'react'

import Home from '../components/Home'
import Awards from '../components/Awards'
import Schedule from '../components/Schedule'
import HowPage from '../components/HowPage'

import bgHome from '../assets/bg-home.jpg'
import bgAwards from '../assets/bg-malphite.png'
import bgHowpage from '../assets/bg-vex.png'
import bgSchedule from '../assets/bg-progamação.jpeg'

const MainPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <section className="home_container" style={{backgroundImage: `url(${bgHome})`}} id='home'>
        <Home />
      </section>
      <section className="awards_container" style={{backgroundImage: `url(${bgAwards})`}} id='awards'>
        <Awards />
      </section>
      <section className="schedule_container" style={{backgroundImage: `url(${bgSchedule})`}} id='schedule'>
        <Schedule />
      </section>
      <section className="howpage_container" style={{backgroundImage: `url(${bgHowpage})`}} id='howpage'>
        <HowPage />
      </section>
    </>
  )
}

export default MainPage