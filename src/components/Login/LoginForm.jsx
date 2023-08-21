import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import InputDefault from './form/InputDefault';
import ButtonDefault from './form/ButtonDefault';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../userContext';
import MessageError from '../Utils/MessageError';
import Title from '../Utils/Title';

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
    <>
      <section className='login'>
      <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <InputDefault type='text' label='Usuário' name='usuarioElement' autocomplete="username" {...usuarioElement} />
          <InputDefault type='password' label='Senha' name='passwordElement' autocomplete="current-password" {...passwordElement} />

          <ButtonDefault loading={loading}>Entrar</ButtonDefault>

          <MessageError error={error} />
          <Link className='link-esqueci-senha' to='/login/perdeu'>Esqueci minha senha</Link>
        </form>

      </section>
      <section className='login'>
      <Title>Cadastro</Title>
        <p>Ainda não possui conta? Cadastre-se no site!</p>
        <Link to='/login/criar-conta' className='button-default'>Cadastre-se</Link>
      </section >
    </>
  )
}

export default LoginForm;