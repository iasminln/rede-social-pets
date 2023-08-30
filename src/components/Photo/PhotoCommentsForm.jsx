import { IconPataComment } from '../Utils/Icons/IconPataComment'
import useFetch from '../../hooks/useFetch'
import { COMMENT_POST } from '../../Api'
import MessageError from '../Utils/MessageError'
import useForm from '../../hooks/useForm'
import InputDefault from '../Login/form/InputDefault'
import { IconSpinner } from '../Utils/Icons/IconSpinner'

const PhotoCommentsForm = ({ id, setListComments }) => {
  const { request, error, loading } = useFetch();
  const commentElement = useForm()


  const handleClick = async (e) => {
    e.preventDefault();
    commentElement.validate()
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, { comment: commentElement.valueRef?.current?.value }, token)
    const { response, json } = await request(url, options)

    if (response.ok) {
      document.querySelector('#commentElement').value = ''
      setListComments((listComments) => [json, ...listComments])
    }
  }


  return (
    <>
      <MessageError error={error} />

      <form className='form-comentarios'>
        <InputDefault
          placeholder='Adicionar um comentário...'
          className='textarea-coment'
          name="commentElement"
          type='text'
          {...commentElement}
          isTextarea={true}

        />
        <button
          onClick={handleClick}
          className='btn-comentar'
          aria-label='Comentar'
          title='Comentar'
        >
          {loading ? <IconSpinner /> : <IconPataComment />}
        </button>
      </form>
    </>
  )
}

export default PhotoCommentsForm