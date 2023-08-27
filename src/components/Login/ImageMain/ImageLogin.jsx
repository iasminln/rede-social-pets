import { listImages } from './ListImages'
import useMedia from '../../../hooks/useMedia'
import ImageWebp from '../../Utils/ImageWebp'

const ImageLogin = () => {
  const isMobile = useMedia('(max-width: 800px)')
  const index = Math.floor(Math.random() * 5)

  return (
    <>
    <ImageWebp 
    src={isMobile ? listImages[index].srcMobile : listImages[index].src}
    srcWebp={isMobile ? listImages[index].srcWebpMobile : listImages[index].srcWebp}
    alt={listImages[index].alt}
    id="imagen-login"
    
    />
      {/* <img
        src={isMobile ? listImages[index].srcMobile : listImages[index].src}
        alt={listImages[index].alt}
        id="imagen-login"
      /> */}
    </>
  )
}

export default ImageLogin;