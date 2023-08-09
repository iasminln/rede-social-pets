import React from 'react'
import { listImages } from './ListImages'

const ImageLogin = () => {

  let index = 0
  let imagemLogin

  const buscandoImagem = setInterval(() => {
    imagemLogin = document.getElementById("imagen-login")

    if (imagemLogin) {
      clearInterval(buscandoImagem)
      mudarImagem()
    }

  }, 500)

  const mudarImagem = () => {
    setInterval(() => {
      if (window.innerWidth < 800) imagemLogin.src = listImages[index].srcMobile;
      else imagemLogin.src = listImages[index].src;

      imagemLogin.alt = listImages[index].alt;
      index === listImages.length - 1 ? index = 0 : index++
    }, 6000)
  }


  return (
    <>
      <img
        src={window.innerWidth < 800 ? listImages[listImages.length - 1].srcMobile : listImages[listImages.length - 1].src}
        alt={listImages[listImages.length - 1].alt}
        id="imagen-login"
      />
    </>
  )
}

export default ImageLogin;