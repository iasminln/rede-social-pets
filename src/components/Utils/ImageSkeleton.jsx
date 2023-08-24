import { useState } from 'react'

const ImageSkeleton = ({ src, alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false)
    target.style.opacity = 1;
  }

  return (
    <div className='wrapper-skeleton img'>
      {skeleton && <div className='div-skeleton'></div>}
      <img onLoad={handleLoad} src={src} alt={alt} {...props} />
    </div>
  )
}

export default ImageSkeleton