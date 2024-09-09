import { NavLink } from 'react-router-dom'
import '../styles/components/home.sass'

const Home = () => {
  return (
    <div className="home_contents">
      <h2 className='home-edition'>1ª edição</h2>
      <h1 className='home-title'>cplol</h1>
      <h2 className='home-date'>dia 10/12</h2>
      <NavLink className='home-btn' to='form'>Inscreva-se</NavLink>
    </div>
  )
}

export default Home