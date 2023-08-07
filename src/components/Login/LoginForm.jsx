import React, { useEffect } from 'react'
import '../../css/style.scss'
import { Link } from 'react-router-dom';
import InputDefault from './InputDefault';
import ButtonDefault from './ButtonDefault';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../api';

const LoginForm = () => {
  const passwordElement = useForm()
  const usuarioElement = useForm()

  useEffect(()=>{
    const token = window.localStorage.getItem('token')
    if(token){
      getUser(token)
    }
  }, [])

  const getUser = async (token) =>{
    const {url, options} = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    usuarioElement.validate()
    passwordElement.validate()

    if (usuarioElement.validate() && passwordElement.validate()) {
      const {url, options} = TOKEN_POST({
        username: usuarioElement?.valueRef?.current?.value,
        password: passwordElement?.valueRef?.current?.value,
      })

      const response = await fetch(url, options)
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      getUser(json.token)
    }

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