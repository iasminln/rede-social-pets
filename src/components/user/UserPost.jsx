import React, { useEffect, useState } from 'react'
import Title from '../Utils/Title';
import InputDefault from '../Login/form/InputDefault'
import useForm from '../../hooks/useForm';
import ButtonDefault from '../Login/form/ButtonDefault';
import MessageError from '../Utils/MessageError'
import useFetch from '../../hooks/useFetch'
import { PHOTO_POST } from '../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../Utils/Head';


const UserPost = () => {
  const petAge = useForm()
  const petName = useForm()
  const petWeight = useForm()
  const [img, setImg] = useState()
  const { request, loading, error, data } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  const handleClick = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', petName?.valueRef?.current?.value)
    formData.append('peso', petWeight?.valueRef?.current?.value)
    formData.append('idade', petAge?.valueRef?.current?.value)

    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(formData, token)
    await request(url, options)
  }

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }


  return (
    <div className="container-post">
      <Head title='Postar' />
      <Title>Postar foto</Title>
      <div className='conteudo'>

        <form onSubmit={handleClick}>
          <InputDefault type='text' label='Nome' name='petName' {...petName} />
          <InputDefault type='number' label='Idade' name='petAge' {...petAge} />
          <InputDefault type='number' label='Peso' name='petWeight' {...petWeight} />
          <input type="file" name='img' id='img' onChange={handleImgChange} />

          <ButtonDefault loading={loading}>Enviar</ButtonDefault>
          <MessageError>{error}</MessageError>
        </form>
        {img?.preview &&
          <div className='conteudo-preview'>
            <p className='text-preview'>Preview</p>
            <img src={img.preview} />
          </div>
        }

      </div>
    </div>
  )
}

export default UserPost;