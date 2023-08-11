import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed';
import UserPost from './UserPost';
import Estatisticas from './Estatisticas';


const Conta = () => {
  return (
    <div className="wrapper-user-pages">
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='post' element={<UserPost />} />
        <Route path='/estatisticas' element={<Estatisticas />} />
      </Routes>
      
    </div>
  )
}

export default Conta;