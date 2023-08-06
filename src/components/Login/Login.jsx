import React from 'react'
import '../../css/style.scss'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginRecuperarSenha from './LoginRecuperarSenha';

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/criar" element={<LoginCreate />} />
        <Route path="/recuperar" element={<LoginRecuperarSenha />} />
      </Routes>
    </>
  )
}

export default Login;