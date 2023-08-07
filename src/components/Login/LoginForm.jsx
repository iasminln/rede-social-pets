import React, { useRef } from 'react'
import '../../css/style.scss'
import { Link } from 'react-router-dom';
import InputDefault from './InputDefault';
import ButtonDefault from './ButtonDefault';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const passwordElement = useForm()
  const usuarioElement = useForm('email')

  const handleSubmit = (e) => {
    e.preventDefault()

    usuarioElement.validate()
    console.log("enviou", usuarioElement?.valueRef?.current?.value)

    // fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({`${usuarioElement.current?.value}, ${passwordElement.current?.value} }`)
    // })
  }


  return (
    <section className='login'>
      <p className='titulos'>Login</p>
      <form action="" onSubmit={handleSubmit}>
        <InputDefault type='text' label='Usuário' name='usuarioElement' {...usuarioElement} />
        <InputDefault type='password' label='Senha' name='passwordElement' {...passwordElement} />

        <ButtonDefault>Entrar</ButtonDefault>
        <Link className='x-small-text' to='/login/recuperar'>Esqueci minha senha</Link>
      </form>
    </section>
  )
}

export default LoginForm;