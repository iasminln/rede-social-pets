import ButtonDefault from '../Login/form/ButtonDefault'
import ModalDefault from '../Utils/ModalDefault'
import useFetch from '../../hooks/useFetch'
import { COMMENT_DELETE } from '../../Api'
import MessageError from '../Utils/MessageError'
import { PHOTO_GET } from '../../Api';
import { useParams } from 'react-router-dom'


const ModalDeleteComment = ({ onClose, idComment, setListComments }) => {
  const { request, loading, error } = useFetch();
  const { id } = useParams();

  const handleDelete = async (idComment) => {
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_DELETE(idComment, token)
    const { response } = await request(url, options)

    if (response.ok) {
      const { url, options } = PHOTO_GET(id)
      const { json } = await request(url, options)
      setListComments(json.comments)
      onClose(false)
    }
  }


  return (
    <ModalDefault handleClickModal={() => onClose(false)}>
      <p className='box-text-01'>Tem certeza que deseja deletar o comentário?</p>
      <MessageError error={error} />
      <div className='modal-sair-btns'>
        <ButtonDefault loading={loading} onClick={() => handleDelete(idComment)}>Deletar</ButtonDefault>
        <ButtonDefault onClick={() => onClose(false)}>Voltar</ButtonDefault>
      </div>
    </ModalDefault>
  )
}

export default ModalDeleteComment