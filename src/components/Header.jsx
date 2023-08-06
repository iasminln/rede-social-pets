import React from 'react'
import '../css/style.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <Link className='home' to="/">DoCaSocial</Link>
        <Link className='login' to="/login">Login / Cadastro</Link>
      </nav>
    </header>
  )
}

export default Header;