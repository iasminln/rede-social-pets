import React from 'react'
import { listImages } from './ListImages'
import useMedia from '../../../hooks/useMedia'

const ImageLogin = () => {
  const isMobile = useMedia('(max-width: 800px)')
  const index = Math.floor(Math.random() * 5)

  return (
    <>
      <img
        src={isMobile ? listImages[index].srcMobile : listImages[index].src}
        alt={listImages[index].alt}
        id="imagen-login"
      />
    </>
  )
}

export default ImageLogin;