import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import MessageError from '../Utils/MessageError';
import Loading from '../Utils/Loading';
import Photo from './Photo';
import Feed from '../Feed/Feed';
import Head from '../Utils/Head';
import { Link } from 'react-router-dom';

const PhotoPage = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch()



  useEffect(() => {
    const { url, options } = PHOTO_GET(id)
    request(url, options)
  }, [id, request]);


  <MessageError>{error}</MessageError>
  if (loading) <Loading />

  if (data)
    return (
      <section className='wrapper-photo-page'>
        <Head title={data.photo.title} />
        <div className='infos-photo'>
          <Photo data={data} />
        </div>
        <div className='infos-author'>
          <p className='text-infos-author'>Veja mais publicações de <Link to={`/perfil/${data.photo.author}`}>@{data.photo.author}</Link></p>
          <Feed user={data.photo.author} total={3} preview={true} />
        </div>

      </section>
    )
}

export default PhotoPage