import React, { useState } from 'react'
import InputDefault from './form/InputDefault';
import ButtonDefault from './form/ButtonDefault';
import useForm from '../../hooks/useForm';
import { USER_POST } from '../../Api';
import useFetch from '../../hooks/useFetch';
import ModalConfirmation from './ModalConfirmation';
import MessageError from './form/MessageError';


const LoginCreate = () => {
  const passwordElement = useForm()
  const usuarioElement = useForm()
  const emailElement = useForm('email')
  const { loading, error, request } = useFetch()
  const [visibleBox, setVisibleBox] = useState(false)


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

    const { response } = await request(url, options)

    if (response.ok) setVisibleBox(true)

  }


  return (
    <section className='login'>
      <h1 className='titulos'>Cadastro</h1>

      <form onSubmit={handleSubmit}>
        <InputDefault type='text' label='Usuário' name='usuarioElement' autocomplete="username" {...usuarioElement} />
        <InputDefault type='email' label='E-mail' name='emailElement' autocomplete="email" {...emailElement} />
        <InputDefault type='password' label='Senha' name='passwordElement' autocomplete="new-password" {...passwordElement} />

        <ButtonDefault loading={loading}>Criar conta</ButtonDefault>

        <MessageError error={error} />

        {visibleBox ?
          <ModalConfirmation
            onClose={setVisibleBox}
            username={usuarioElement?.valueRef?.current?.value}
            password={passwordElement.valueRef?.current?.value}
          />
          : null}

      </form>

    </section>
  )
}

export default LoginCreate;