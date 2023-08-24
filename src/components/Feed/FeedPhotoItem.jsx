import IconEye from '../../assets/visualizacao.svg'
import ImageSkeleton from '../Utils/ImageSkeleton'

const FeedPhotoItem = ({ photo, setModalPhoto }) => {

  const handleClick = () => {
    setModalPhoto(photo)
  }

  return (
    <li className='photo-item' onClick={handleClick}>
      <ImageSkeleton src={photo.src} alt={photo.title} />
      <span className='visualizacao'><img src={IconEye} /> {photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem