import React, { useContext, useEffect } from 'react'
import '../../css/style.scss'
import { Link } from 'react-router-dom';
import InputDefault from './InputDefault';
import ButtonDefault from './ButtonDefault';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../userContext';

const LoginForm = () => {
  const passwordElement = useForm()
  const usuarioElement = useForm()
  const { userLogin, error, loading } = useContext(UserContext)


  const handleSubmit = async (e) => {
    e.preventDefault()
    usuarioElement.validate()
    passwordElement.validate()


    if (usuarioElement.validate() && passwordElement.validate()) {
      userLogin(usuarioElement?.valueRef?.current?.value, passwordElement?.valueRef?.current?.value)
    }
  }

  return (
    <section className='login'>
      <p className='titulos'>Login</p>
      <form action="" onSubmit={handleSubmit}>
        <InputDefault type='text' label='Usuário' name='usuarioElement' {...usuarioElement} />
        <InputDefault type='password' label='Senha' name='passwordElement' {...passwordElement} />

        {loading ? <ButtonDefault disabled>...</ButtonDefault> : <ButtonDefault>Entrar</ButtonDefault>}

        {error && <p className='mensage-error-login'>{error}</p>}
        <Link className='x-small-text' to='/login/recuperar'>Esqueci minha senha</Link>
      </form>
    </section>
  )
}

export default LoginForm;