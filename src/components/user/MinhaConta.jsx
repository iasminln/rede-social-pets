import { useContext, useState } from 'react'
import Title from '../Utils/Title'
import Head from '../Utils/Head'
import { UserContext } from '../../userContext'
import { PASSWORD_LOST } from '../../Api'
import useFetch from '../../hooks/useFetch'
import MessageError from '../Utils/MessageError'
import { IconSpinner } from '../Utils/Icons/IconSpinner'

const MinhaConta = () => {
  const { data } = useContext(UserContext)
  const { loading, error, request } = useFetch()
  const [resetEmail, setResetEmail] = useState(false)


  const handleClick = async () => {
    setResetEmail(true)
    const { url, options } = PASSWORD_LOST({ login: data.username, url: window.location.href.replace('conta', 'login/resetar') })
    await request(url, options)
    
  }

  return (
    <section className='user-profile'>
      <Head title='Minha conta' />

      <Title>Minha conta</Title>
      <div className='dados-pessoais'>
        <p>Username: {data.username}</p>
        <p>E-mail: {data.email}</p>
        <p>Senha: <button className='btn-resetar' onClick={handleClick}>Resetar senha</button>
          {resetEmail ? loading  ? <IconSpinner /> : error ? '' : <span className='text-resetar'>Um link foi enviado para seu endereço de e-mail para que você possa resetar sua senha.</span> : null} </p>
        <MessageError error={error} />
      </div>

    </section>
  )
}

export default MinhaConta