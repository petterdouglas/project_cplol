import '../styles/components/awards.sass'

const Awards = () => {
  return (
    <div className="awards_contents">
      <div className="awards_contents-side">
        <h1 className='awards_contents-title'>Premiações</h1>
        <div className="awards_contents-square">
          <p><span>1º Lugar:</span> 500 reais</p>
          <p><span>2º Lugar:</span> 200 reais</p>
          <p><span>3º Lugar:</span> 100 reais</p>
        </div>
        <a href='#howpage' className='awards_contents-btn'>saber mais</a>
      </div>
    </div>
  )
}

export default Awards