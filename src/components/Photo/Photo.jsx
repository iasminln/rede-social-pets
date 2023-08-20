import React from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import Title from '../Utils/Title'
import IconEye from '../../assets/visualizacao-black.svg'

const Photo = ({ data }) => {
  const { photo, comments } = data



  return (
    < >
      <div className='image-modal'> <img src={photo.src} alt={photo.title} /></div>
      <div className='infos-modal'>
        <p className='infos-autor'>
          <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
          <span className='visualizacao'><img src={IconEye} /> {photo.acessos}</span>
        </p>

        <Title> <Link to={`/foto/${photo.id}`}>{photo.title}</Link></Title>


        <ul className='infos-itens'>
          <li> {photo.peso} kg</li>
          <li> {photo.idade}{photo.idade === 1 ? ' ano' : ' anos'} </li>
        </ul>

        <PhotoComments id={photo.id} comments={comments} />
      </div>


    </>
  )
}

export default Photo;