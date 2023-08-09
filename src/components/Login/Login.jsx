import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecuperarSenha from './LoginRecuperarSenha';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../userContext';
import ImageLogin from './ImageMain/ImageLogin';

const Login = () => {
  const { login } = useContext(UserContext)
  if (login === true) return <Navigate to='/conta' />

  return (
    <div className='wrapper-login-pages'>
      <div className='login-image'>
        <ImageLogin />
      </div>
      <div className='login-forms'>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/criar" element={<LoginCreate />} />
          <Route path="/recuperar" element={<LoginRecuperarSenha />} />
        </Routes>
      </div>
    </div>
  )
}

export default Login;