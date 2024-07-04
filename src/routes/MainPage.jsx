import Home from '../components/Home'
import Awards from '../components/Awards'
import Schedule from '../components/Schedule'
import HowPage from '../components/HowPage'

const MainPage = () => {

  return (
    <>
      <section className="home_container" id='home'>
        <Home />
      </section>
      <section className="awards_container" id='awards'>
        <Awards />
      </section>
      <section className="schedule_container" id='schedule'>
        <Schedule />
      </section>
      <section className="howpage_container" id='howpage'>
        <HowPage />
      </section>
    </>
  )
}

export default MainPage