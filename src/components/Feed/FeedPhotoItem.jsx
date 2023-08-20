import React from 'react'
import IconEye from '../../assets/visualizacao.svg'

const FeedPhotoItem = ({ photo, setModalPhoto }) => {

  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <li className='photo-item' onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span className='visualizacao'><img src={IconEye} /> {photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem