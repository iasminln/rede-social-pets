import React, { useContext } from 'react'
import InputDefault from './form/InputDefault';
import ButtonDefault from './form/ButtonDefault';
import { IconSpinner } from './form/Icons';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../userContext';
import { USER_POST } from '../../Api';

const LoginCreate = () => {
  const {  error, loading } = useContext(UserContext)
  const passwordElement = useForm()
  const usuarioElement = useForm()
  const emailElement = useForm('email')


  const handleSubmit = async (e) => {
    e.preventDefault()
    usuarioElement.validate()
    passwordElement.validate()
    emailElement.validate()

    const { url, options } = USER_POST({
      username: usuarioElement?.valueRef?.current?.value,
      email: emailElement.valueRef?.current?.value,
      password: passwordElement.valueRef?.current?.value
    })

    const response = await fetch(url, options)

    console.log("ress", response)
  }


  return (
    <section className='login'>
      <h1 className='titulos'>Cadastro</h1>

      <form onSubmit={handleSubmit}>
        <InputDefault type='text' label='Usuário' name='usuarioElement' autocomplete="username" {...usuarioElement} />
        <InputDefault type='email' label='E-mail' name='emailElement' autocomplete="email" {...emailElement} />
        <InputDefault type='password' label='Senha' name='passwordElement' autocomplete="new-password" {...passwordElement} />

        {loading ? <ButtonDefault disabled><IconSpinner /></ButtonDefault> : <ButtonDefault>Criar conta</ButtonDefault>}

        {error && <p className='mensage-error-login'>{error}</p>}

      </form>

    </section>
  )
}

export default LoginCreate;