import React, { useContext } from 'react'
import '../css/style.scss'
import { Link } from 'react-router-dom';
import { UserContext } from '../userContext';

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

 
  return (
    <header>
      <nav className='nav'>
        <Link className='home' to="/">DoCaSocial</Link>
        {data ?
          <>
            <Link className='login' to="/login">Olá, {data.nome}</Link>
            <button onClick={userLogout}>Sair</button>
          </>
          :
          <Link className='login' to="/login">Login / Cadastro</Link>
        }

      </nav>
    </header>
  )
}

export default Header;