import { IconEye } from '../Utils/Icons/IconEye'
import ImageSkeleton from '../Utils/ImageSkeleton'
import { Link } from 'react-router-dom'

const FeedPhotoItem = ({ photo }) => {

  return (
    <li className='photo-item'>
      <Link to={`/foto/${photo.id}`}>
        <ImageSkeleton src={photo.src} alt={photo.title} />
        <div className='visualizacao'>

          <span className='view01'>
            {photo.title}
          </span>

          <span className='view02'>
            <IconEye color='#fff' />
            {photo.acessos}
          </span>

          <span className='view03'>
            @{photo.author}
          </span>

        </div>
      </Link>
    </li>
  )
}

export default FeedPhotoItem