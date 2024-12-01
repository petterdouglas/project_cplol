import '../styles/components/awards.sass'

const Awards = () => {
  return (
    <div className="awards_contents">
      <div className="awards_contents-side">
        <h1 className='awards_contents-title'>Premiações</h1>
        <div className="awards_contents-square">
          <p><span>1º, 2º e 3º Lugares:</span></p>
          <p>. Reconhecimento no nosso Instagram</p>
          <p>. Inscrições gratuitas no próximo campeonato</p>
          <p><span>P.S: próximo campeonato haverá prêmios em dinheiro</span></p>
        </div>
        <a href='#howpage' className='awards_contents-btn'>saber mais</a>
      </div>
    </div>
  )
}

export default Awards