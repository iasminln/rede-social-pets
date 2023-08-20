import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTO_DELETE } from '../../Api';
import ModalDefault from '../Utils/ModalDefault'
import ButtonDefault from '../Login/form/ButtonDefault'

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const [openModal, setOpenModal] = useState(false);


  const handleClick = async () => {
    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_DELETE(id, token)
    const { response } = await request(url, options)
    if (response.ok) window.location.reload();
  }


  return (
    <>
      <button onClick={() => { setOpenModal(true) }} className='btn-deletar'>Deletar</button>

      {openModal &&
        <ModalDefault handleClickModal={() => { setOpenModal(false) }}>
          Tem certeza que deseja deletar a foto?
          <ButtonDefault loading={loading} onClick={handleClick}>Deletar</ButtonDefault>
          <ButtonDefault onClick={() => { setOpenModal(true) }}>Cancelar</ButtonDefault>
        </ModalDefault>}

    </>
  )
}

export default PhotoDelete