import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../Api'
import MessageError from '../Utils/MessageError';
import Loading from '../Utils/Loading'
import FeedPhotoItem from './FeedPhotoItem';

const FeedPhotos = ({ user, page, setInfinite, total }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const valorTotal = total ? total : 8
      const { url, options } = PHOTOS_GET({ page, total: valorTotal, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < valorTotal) setInfinite(false)

    }
    fetchPhotos();
  }, [page, request, user, setInfinite, total]);


  if (error) return <MessageError error={error} />
  if (loading) return <Loading />

  if (data)
    return (
      <>
        {data.map(photo => <FeedPhotoItem key={photo.id} photo={photo} />)}
      </>
    );
  else return null
}

export default FeedPhotos