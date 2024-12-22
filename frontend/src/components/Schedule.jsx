import '../styles/components/schedule.sass'

const Schedule = () => {
  return (
    <div className="schedule_contents" >
      <h1 className='schedule_contents-title'>Programação</h1>
      <ul>
        <li>
          <p className='schedule_contents-dates'>14/01 a 19/01</p>
          <p className='schedule_contents-case'>Eliminatórias</p>
        </li>
        <li>
          <p className='schedule_contents-dates'>20/01</p>
          <p className='schedule_contents-case'>Semifinais</p>
        </li>
        <li>
          <p className='schedule_contents-dates'>21/01</p>
          <p className='schedule_contents-case'>Final</p>
        </li>
      </ul>
    </div>
  )
}

export default Schedule