
import { useForm } from 'react-hook-form'
import validator from 'validator'

import '../styles/form.sass'

import bgForm from '../assets/bg-form.jpg'

const Form = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='form_container' style={{backgroundImage: `url(${bgForm})`}}>
      <div className="form-title"><h1>Formulário</h1></div>

      <form className="form_contents" onSubmit={handleSubmit(onSubmit)}>
        <div className="form_questions">
          <label htmlFor='email'>Digite o e-mail do líder da equipe:</label>
          <input className={errors?.email && 'input-error'} type="text" id='email' {...register('email', { required: true, validate: (value) => validator.isEmail(value)})} autoComplete='off'/>
        </div>
        <div className="form_questions">
          <label htmlFor='name'>Digite o nome da equipe:</label>
          <input className={errors?.name && 'input-error'} type="text" id='name' {...register('name', { required: true })} autoComplete='off'/>
        </div>
        <div className="form_questions">
          <label htmlFor='nick'>Insira o nickname do líder da equipe:</label>
          <input className={errors?.nick && 'input-error'} type="text" id='nick' {...register('nick', { required: true })} autoComplete='off'/>
        </div>
        <div className="form_questions">
          <h2>Insira os dados da sua equipe:</h2>
          <ul>
            <li>
              <h2 className='members'>Membro 1</h2>
              <div className="member_data">
                <div className="member_data-name">
                  <label className='members-label' htmlFor="member1Name">Nome:</label>
                  <input className={errors?.member1Name && 'input-error'} type="text" id='member1Name' {...register('member1Name', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-nick">
                  <label className='members-label' htmlFor="member1Nick">Nickname:</label>
                  <input className={errors?.member1Nick && 'input-error'} type="text" id='member1Nick' {...register('member1Nick', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-pos">
                  <label className='members-label' htmlFor="member1Pos">Posição:</label>
                  <input className={errors?.member1Pos && 'input-error'} type="text" id='member1Pos' {...register('member1Pos', { required: true })} autoComplete='off'/>
                </div>
              </div>
            </li>
            <li>
              <h2 className='members'>Membro 2</h2>
              <div className="member_data">
                <div className="member_data-name">
                  <label className='members-label' htmlFor="member2Name">Nome:</label>
                  <input className={errors?.member2Name && 'input-error'} type="text" id='member2Name' {...register('member2Name', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-nick">
                  <label className='members-label' htmlFor="member2Nick">Nickname:</label>
                  <input className={errors?.member2Nick && 'input-error'} type="text" id='member2Nick'{...register('member2Nick', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-pos">
                  <label className='members-label' htmlFor="member2Pos">Posição:</label>
                  <input className={errors?.member2Pos && 'input-error'} type="text" id='member2Pos'{...register('member2Pos', { required: true })} autoComplete='off'/>
                </div>
              </div>
            </li>
            <li>
              <h2 className='members'>Membro 3</h2>
              <div className="member_data">
                <div className="member_data-name">
                  <label className='members-label' htmlFor="member3Name">Nome:</label>
                  <input className={errors?.member3Name && 'input-error'} type="text" id='member3Name' {...register('member3Name', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-nick">
                  <label className='members-label' htmlFor="member3Nick">Nickname:</label>
                  <input className={errors?.member3Nick && 'input-error'} type="text" id='member3Nick' {...register('member3Nick', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-pos">
                  <label className='members-label' htmlFor="member3Pos">Posição:</label>
                  <input className={errors?.member3Pos && 'input-error'} type="text" id='member3Pos' {...register('member3Pos', { required: true })} autoComplete='off'/>
                </div>
              </div>
            </li>
            <li>
              <h2 className='members'>Membro 4</h2>
              <div className="member_data">
                <div className="member_data-name">
                  <label className='members-label' htmlFor="member4Name">Nome:</label>
                  <input className={errors?.member4Name && 'input-error'} type="text" id='member4Name' {...register('member4Name', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-nick">
                  <label className='members-label' htmlFor="member4Nick">Nickname:</label>
                  <input className={errors?.member4Nick && 'input-error'} type="text" id='member4Nick' {...register('member4Nick', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-pos">
                  <label className='members-label' htmlFor="member4Pos">Posição:</label>
                  <input className={errors?.member4Pos && 'input-error'} type="text" id='member4Pos' {...register('member4Pos', { required: true })} autoComplete='off'/>
                </div>
              </div>
            </li>
            <li>
              <h2 className='members'>Membro 5</h2>
              <div className="member_data">
                <div className="member_data-name">
                  <label className='members-label' htmlFor="member5Name">Nome:</label>
                  <input className={errors?.member5Name && 'input-error'} type="text" id='member5Name' {...register('member5Name', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-nick">
                  <label className='members-label' htmlFor="member5Nick">Nickname:</label>
                  <input className={errors?.member5Nick && 'input-error'} type="text" id='member5Nick' {...register('member5Nick', { required: true })} autoComplete='off'/>
                </div>
                <div className="member_data-pos">
                  <label className='members-label' htmlFor="member5Pos">Posição:</label>
                  <input className={errors?.member5Pos && 'input-error'} type="text" id='member5Pos' {...register('member5Pos', { required: true })} autoComplete='off'/>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="form_questions">
          <h2>Envie em formato (.png) o ícone da sua equipe:</h2>
          <label className={errors?.logo ? 'upload-error' : 'upload-label'} htmlFor='logo'><img src="src/assets/upload-icon.png" alt="" /> Adicionar arquivo</label>
          <input type='file' id='logo' {...register('logo', { required: true })} />
        </div>
        <button className='form_btn' type="submit" >Enviar</button>
      </form>
    </div>
  )
}

export default Form