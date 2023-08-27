import { useContext } from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import Title from '../Utils/Title'
import IconEye from '../../assets/visualizacao-black.svg'
import { UserContext } from '../../userContext'
import PhotoDelete from './PhotoDelete'
import ImageSkeleton from '../Utils/ImageSkeleton'

const Photo = ({ data }) => {
  const { photo, comments } = data
  const user = useContext(UserContext)


  return (
    <>
      <div className='image-modal'> <ImageSkeleton src={photo.src} alt={photo.title} /></div>
      <div className='infos-modal'>
        <div>
          <div className='infos-autor'>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> : <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
            <span className='visualizacao'><img src={IconEye} /> {photo.acessos}</span>
          </div>

          <Title><Link to={`/foto/${photo.id}`}>{photo.title}</Link></Title> 

          <ul className='infos-itens'>
            <li> {photo.peso} kg</li>
            <li> {photo.idade}{photo.idade === '1' ? ' ano' : ' anos'} </li>
          </ul>
        </div>

        <PhotoComments id={photo.id} comments={comments} />

      </div>
    </>
  )
}

export default Photo;