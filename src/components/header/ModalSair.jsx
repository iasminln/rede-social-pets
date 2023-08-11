import React, { useContext } from 'react'
import ButtonDefault from '../Login/form/ButtonDefault'
import { UserContext } from '../../userContext'

const ModalSair = ({ onClose }) => {
  const { userLogout, loading } = useContext(UserContext)

  const handleClickSair = () => {
    userLogout()
    onClose(false)
  }


  return (
    <div className='background-confirmation' onClick={() => { onClose(false) }}>
      <div className='box-confirmation' onClick={(e) => e.stopPropagation()}>
        <p className='box-text-01'>Tem certeza que gostaria de sair?</p>

        <div className='modal-sair-btns'>
          <ButtonDefault loading={loading} onClick={handleClickSair}>Sair</ButtonDefault>
          <ButtonDefault loading={loading} onClick={() => { onClose(false) }}>Voltar</ButtonDefault>
        </div>
      </div>
    </div>
  )
}

export default ModalSair