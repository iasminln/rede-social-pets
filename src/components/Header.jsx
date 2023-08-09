import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

 
  return (
    <header>
      <nav className='nav'>
        <Link className='home' to="/">DoCaSocial</Link>
        {data ?
          <div className='container-header-login'>
            <Link className='login' to="/login">Olá, {data.nome}</Link>
            <button className='btn-login-sair' onClick={userLogout}>Sair</button>
          </div>
          :
          <Link className='login' to="/login">Login / Cadastro</Link>
        }

      </nav>
    </header>
  )
}

export default Header;