import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import MessageError from '../Utils/MessageError';
import Loading from '../Utils/Loading';
import Photo from '../Photo/Photo'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch()


  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)

    fetch(url, options)
    .then(res=>{
      return res.text()
    }).then(text=>{
      return console.log("texto", text)
    })


  }, [photo, request]);

  console.log("o que tem aqui", data)
  return (
    <>
      <MessageError error={error} />
      {loading && <Loading />}
      {data &&
        <div className='background-modal' onClick={() => { setModalPhoto(null) }}>
          <div className='box-modal' onClick={(e) => e.stopPropagation()}> <Photo data={data} /></div>
        </div>
      }
    </>
  )
}

export default FeedModal;
