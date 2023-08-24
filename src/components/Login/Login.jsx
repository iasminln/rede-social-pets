import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginResetarSenha from './LoginResetarSenha';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../userContext';
import ImageLogin from './ImageMain/ImageLogin';
import NotFound from '../Utils/NotFound';
import LoginPerdeuSenha from './LoginPerdeuSenha';

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
          <Route path="/criar-conta" element={<LoginCreate />} />
          <Route path="/perdeu" element={<LoginPerdeuSenha />} />
          <Route path="/resetar" element={<LoginResetarSenha />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default Login;