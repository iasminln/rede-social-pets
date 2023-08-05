import React from 'react'
import '../css/scss/_header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="/login">Login / Cadastro</Link>
    </div>
  )
}

export default Header;