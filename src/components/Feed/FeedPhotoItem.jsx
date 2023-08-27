import IconEye from '../../assets/visualizacao.svg'
import ImageSkeleton from '../Utils/ImageSkeleton'
import { Link } from 'react-router-dom'

const FeedPhotoItem = ({ photo }) => {

  return (
    <li className='photo-item'>
      <Link to={`/foto/${photo.id}`}>
        <ImageSkeleton src={photo.src} alt={photo.title} />
        <span className='visualizacao'><img src={IconEye} /> {photo.acessos}</span>
      </Link>
    </li>
  )
}

export default FeedPhotoItem