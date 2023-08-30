import { useContext, useEffect, useState } from 'react'
import { IconLixo } from '../Utils/Icons/IconLixo'
import { FunctionVerifyDate } from './functionVerifyDate'
import { Link } from 'react-router-dom'
import { UserContext } from '../../userContext'
import PhotoCommentsForm from './PhotoCommentsForm'
import { IconPata } from '../Header/Icons'
import ModalDeleteComment from './ModalDeleteComment'


const ListComments = ({ comments, id }) => {
  const user = useContext(UserContext)
  const [listComments, setListComments] = useState(() => comments);
  const { login } = useContext(UserContext)
  const [modalDelete, setModalDelete] = useState(false)
  const [commentId, setCommentId] = useState()


  useEffect(() => {
    setListComments(comments)

  }, [comments]);


  const handleClickModal = (id) => {
    setModalDelete(true)
    setCommentId(id)
  }


  return (
    <div className='comment-area'>
      <p className='title-comments'>Comentários ({listComments.length})</p>
      <ul className='list-comments'>
        {listComments.map((item) => {
          return (
            <li key={item.comment_ID}>
              <div className='title-btn'>
                <div className='title'>
                  <b><Link to={`/perfil/${item.comment_author}`}>@{item.comment_author}</Link></b>
                  <span>{FunctionVerifyDate(item)}</span>
                </div>
                {user.data && user.data.username === item.comment_author &&
                  <div className='div-btn-deletar'>
                    <button className='btn-deletar' onClick={() => handleClickModal(item.comment_ID)}>
                      <IconLixo />
                    </button>
                  </div>
                }
              </div>
              <span className='comment'>{item.comment_content}</span>
            </li>
          )
        })}
      </ul >

      {modalDelete && <ModalDeleteComment onClose={setModalDelete} idComment={commentId} setListComments={setListComments} />}

      {login ?
        <PhotoCommentsForm id={id} setListComments={setListComments} />
        :
        <div className='div-text-login'>
          <span><Link to='/login'>Faça login</Link> para poder comentar! <IconPata width="25px" height="25px" /></span>
        </div>
      }
    </div>
  )
}

export default ListComments