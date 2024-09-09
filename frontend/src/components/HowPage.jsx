import { NavLink } from 'react-router-dom'

import '../styles/components/howpage.sass'

const HowPage = () => {
  return (
    <div className="howpage_contents">
      <h1 className='howpage_contents-title'>Como funcionará?</h1>
      <div className="howpage_contents-side">
        <p>Inscrições: <span>25 reais</span> <span id='span_apart'>(5 reais por integrante)</span></p>
        <p>Nº máximo de participantes: <span>35</span></p>
        <ul>
          <li><span>&gt; </span> <p>Cada equipe deve ter um líder responsável pela inscrição do grupo</p></li>
          <li><span>&gt; </span> <p>O e-mail do líder deve ser disponibilizado para contatop</p></li>
          <li><span>&gt; </span> <p>O nome, nickname e posição de rota de cada membro da equipe deve ser enviado</p></li>
          <li><span>&gt; </span> <p>Após a confirmação das inscrições, maiores informações serão disponibilizadas pelo e-mail</p></li>
          <li><span>&gt;</span> <p>Cada equipe deve ter um líder responsável pela inscrição do grupo</p></li>
        </ul>
        <NavLink className='howpage_contents-btn' to='form'>Inscrever-se</NavLink>
      </div>
    </div>
  )
}

export default HowPage