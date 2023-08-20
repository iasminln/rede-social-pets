import React, { useContext, useState } from 'react'
import { UserContext } from '../../userContext'
import { IconPataComment } from './Icons'
import useFetch from '../../hooks/useFetch'
import { COMMENT_POST } from '../../Api'
import { FunctionVerifyDate } from './functionVerifyDate'
import { Link } from 'react-router-dom'

const PhotoComments = (props) => {
  const { login } = useContext(UserContext)
  const [listComments, setListComments] = useState(() => props.comments.reverse());
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();


  const handleClick = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(props.id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setListComments((listComments) => [json, ...listComments])
    }
  }

  return (
    <>
      <ul className='list-comments'>
        {listComments.map((item) => {
          return (
            <li key={item.comment_ID}>
              <div className='title-time'>
                <b><Link to={`/perfil/${item.comment_author}`}>@{item.comment_author}</Link></b>
                <span>{FunctionVerifyDate(item)}</span>
              </div>
              <span className='comment'>{item.comment_content}</span>
            </li>
          )
        })}
      </ul>


      {login &&
        <div>
          <form className='form-comentarios'>
            <textarea
              placeholder='Adicionar um comentário...'
              className='textarea-coment'
              name="comment"
              id="comment"
              value={comment}
              onChange={({ target }) => { setComment(target.value) }}

            />
            <button
              onClick={handleClick}
              className='btn-comentar'
              aria-label='Comentar'
              title='Comentar'
            >
              <IconPataComment />
            </button>

          </form>
        </div>
      }
    </>
  )
}

export default PhotoComments