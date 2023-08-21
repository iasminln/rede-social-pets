import React from 'react'
import Title from '../Utils/Title'
import InputDefault from '../Login/form/InputDefault'
import ButtonDefault from '../Login/form/ButtonDefault'
import useForm from '../../hooks/useForm'
import useFetch from '../../hooks/useFetch'
import MessageError from '../Utils/MessageError'
import Head from '../Utils/Head'
import { PASSWORD_LOST } from '../../Api'

const LoginPerdeuSenha = () => {
  const usuarioElement = useForm()
  const { data, loading, error, request } = useFetch()


  const handleClick = async (e) => {
    e.preventDefault();
    if (usuarioElement.validate()) {
      const { url, options } = PASSWORD_LOST({ login: usuarioElement?.valueRef?.current?.value, url: window.location.href.replace('perdeu', 'resetar') })
      const { json, response } = await request(url, options)
      console.log("olhar json", json, response, usuarioElement?.valueRef?.current?.value)
    }

  }


  return (
    <section>
      <Head title='Perdeu a senha?'/>
      <Title>Perdeu a senha?</Title>

      {data ? <p>E-mail enviado</p> :
        <form onSubmit={handleClick}>
          <InputDefault type='text' label='Digite o seu e-mail' name='email' {...usuarioElement} />
          <ButtonDefault loading={loading}>Enviar</ButtonDefault>
          <MessageError error={error} />
        </form>
      }

    </section>
  )
}

export default LoginPerdeuSenha