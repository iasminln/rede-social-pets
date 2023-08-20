import React, { useState } from 'react'
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';


const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null)
  
  return (
    <div className="Feed">
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
      
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  )
}

export default Feed;