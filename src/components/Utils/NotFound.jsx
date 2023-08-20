import React from 'react'
import Title from './Title'

const NotFound = () => {
  return (
    <div className='page-error'>
      <Title>Erro 404</Title>
      <p>Página não encontrada!</p>
    </div>
  )
}

export default NotFound