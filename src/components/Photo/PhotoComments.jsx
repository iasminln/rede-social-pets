import React, { useContext, useState } from 'react'
import { UserContext } from '../../userContext'
import { IconPataComment } from './Icons'
import useFetch from '../../hooks/useFetch'
import { COMMENT_POST } from '../../Api'

const PhotoComments = (props) => {
  const { login } = useContext(UserContext)
  const [listComments, setListComments] = useState(() => props.comments);
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  const handleClick = async (e) => {
    e.preventDefault();
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(props.id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setListComments((listComments) => [...listComments, json])
    }

  }


  return (
    <>

      <ul>
        {listComments.map((item) => {
          return (
            <li key={item.comment_ID}>
              <b>{item.comment_author}:</b>
              <span>{item.comment_content}</span>
            </li>
          )
        })}
      </ul>


      {login &&
        <div>
          <form className='form-comentarios'>
            <textarea
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