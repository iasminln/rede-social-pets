import React, { useRef } from 'react'
import '../../css/style.scss'
import { Link } from 'react-router-dom';
import InputDefault from './InputDefault';
import ButtonDefault from './ButtonDefault';

const LoginForm = () => {
  const usuarioElement = useRef(null);
  const passwordElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("enviou", usuarioElement.current?.value, passwordElement.current?.value)
  }


  return (
    <section className='login'>
      <p className='titulos'>Login</p>
      <form action="" onSubmit={handleSubmit}>
        <InputDefault type='text' label='Usuário' name='usuarioElement' />
        <InputDefault type='password' label='Senha' name='passwordElement' />

        {/* <label htmlFor="">
          Senha
          <input
            type="password"
            ref={passwordElement}
          />
        </label> */}
        <ButtonDefault>Entrar</ButtonDefault>
        <Link className='x-small-text' to='/login/recuperar'>Esqueci minha senha</Link>
      </form>
    </section>
  )
}

export default LoginForm;