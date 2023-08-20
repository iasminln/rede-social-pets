import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { PHOTOS_GET } from '../../Api'
import MessageError from '../Utils/MessageError';
import Loading from '../Utils/Loading'
import FeedPhotoItem from './FeedPhotoItem';

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options)
      console.log("olhando", json)
    }
    fetchPhotos();
  }, [request]);


  if (error) return <MessageError>{error}</MessageError>
  if (loading) return <Loading />

  if (data)
    return (

      <ul className='feed'>
        {data.map(photo => <FeedPhotoItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
      </ul>
    );
  else return null
}

export default FeedPhotos