import React, { useEffect, useState } from 'react'
import Title from '../Utils/Title';
import InputDefault from './form/InputDefault';
import ButtonDefault from './form/ButtonDefault';
import MessageError from '../Utils/MessageError';
import { PASSWORD_RESET } from '../../Api';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Head from '../Utils/Head';

const LoginResetarSenha = () => {
  const [login, setLogin] = useState()
  const [key, setKey] = useState()
  const passwordElement = useForm()
  const { request, error } = useFetch();
  const navigate = useNavigate()


  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, []);

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordElement.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: passwordElement?.valueRef?.current?.value
      })

      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }

  }

  return (
    <section className='login'>
      <Head title='Resetar a senha' />
      <Title>Resetar senha</Title>

      <form onSubmit={handleClick}>
        <InputDefault label='Digite uma nova senha' type='password' name='password' {...passwordElement} />
        <ButtonDefault>Enviar</ButtonDefault>
        <MessageError error={error} />

      </form>
    </section>
  )
}

export default LoginResetarSenha;