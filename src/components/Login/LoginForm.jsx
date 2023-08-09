import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import InputDefault from './form/InputDefault';
import ButtonDefault from './form/ButtonDefault';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../userContext';
import IconSpinner from './Icons/IconSpiner';

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
        <h1 className='titulos'>Login</h1>
        <form onSubmit={handleSubmit}>
          <InputDefault type='text' label='Usuário' name='usuarioElement' {...usuarioElement} />
          <InputDefault type='password' label='Senha' name='passwordElement' {...passwordElement} />

          {loading ? <ButtonDefault disabled><IconSpinner /></ButtonDefault> : <ButtonDefault>Entrar</ButtonDefault>}

          {error && <p className='mensage-error-login'>{error}</p>}
          <Link className='x-small-text' to='/login/recuperar'>Esqueci minha senha</Link>
        </form>

      </section>
      <section className='login'>
        <h2 className='titulos'>Cadastro</h2>
        <p>Ainda não possui conta? Cadastre-se no site!</p>
        <Link to='/login/criar-conta'  className='button-default'>Cadastre-se</Link>
      </section >
    </>
  )
}

export default LoginForm;