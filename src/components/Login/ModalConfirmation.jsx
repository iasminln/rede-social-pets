import React, { useContext, useEffect, useState, useCallback } from 'react'
import ButtonDefault from './form/ButtonDefault'
import { UserContext } from '../../userContext'
import ModalDefault from '../Utils/ModalDefault'

const ModalConfirmation = ({ onClose, username, password }) => {
  const { userLogin, login, loading } = useContext(UserContext)
  const [count, setCount] = useState(10)

  const handleClick = useCallback(() => {
    userLogin(username, password)
    if (login) onClose(false)

  }, [login, onClose, password, userLogin, username])


  useEffect(() => {
    const contando = setTimeout(() => {
      setCount(count - 1)
    }, 1000)

    if (count === 0) {
      clearTimeout(contando)
      handleClick()
    }
  }, [count, handleClick])


  return (
    <ModalDefault handleClickModal={handleClick}>
      <p className='box-text-01'>Cadastro concluído com sucesso!</p>
      <p className='box-text-02'>Seja bem vindo(a), <span>{username}</span>!</p>
      <p className='box-text-03'>Você será redirecionado para sua conta: <span>{count}...</span></p>

      <ButtonDefault loading={loading} onClick={handleClick}>Continuar</ButtonDefault>
    </ModalDefault>
  )
}

export default ModalConfirmation;
