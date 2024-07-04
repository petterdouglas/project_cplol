import '../styles/components/schedule.sass'

const Schedule = () => {
  return (
    <div className="schedule_contents" >
      <h1 className='schedule_contents-title'>Programação</h1>
      <ul>
        <li>
          <p className='schedule_contents-dates'>5/12 a 11/12</p>
          <p className='schedule_contents-case'>Eliminatórias</p>
        </li>
        <li>
          <p className='schedule_contents-dates'>12/12 a 13/12</p>
          <p className='schedule_contents-case'>Quartas de final</p>
        </li>
        <li>
          <p className='schedule_contents-dates'>14/12</p>
          <p className='schedule_contents-case'>Semifinais</p>
        </li>
        <li>
          <p className='schedule_contents-dates'>15/12</p>
          <p className='schedule_contents-case'>Final</p>
        </li>
      </ul>
    </div>
  )
}

export default Schedule