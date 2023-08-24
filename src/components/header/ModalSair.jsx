import { useContext } from 'react'
import ButtonDefault from '../Login/form/ButtonDefault'
import { UserContext } from '../../userContext'
import ModalDefault from '../Utils/ModalDefault'

const ModalSair = ({ onClose }) => {
  const { userLogout, loading } = useContext(UserContext)

  const handleClickSair = () => {
    userLogout()
    onClose(false)
  }


  return (
    <ModalDefault handleClickModal={() => { onClose(false) }}>
      <p className='box-text-01'>Tem certeza que gostaria de sair?</p>

      <div className='modal-sair-btns'>
        <ButtonDefault loading={loading} onClick={handleClickSair}>Sair</ButtonDefault>
        <ButtonDefault loading={loading} onClick={() => { onClose(false) }}>Voltar</ButtonDefault>
      </div>
    </ModalDefault>
  )
}

export default ModalSair