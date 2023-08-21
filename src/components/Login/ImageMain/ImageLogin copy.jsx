import React from 'react'
import { listImages } from './ListImages'

const ImageLogincopy = () => {

  let index = Math.floor(Math.random() * 5)
  let initialIndex = index
  let imagemLogin

  const buscandoImagem = setInterval(() => {
    imagemLogin = document.getElementById("imagen-login")

    if (imagemLogin) {
      clearInterval(buscandoImagem)
      mudarImagem()
    }

    return () => {
      clearInterval(buscandoImagem)
    }

  }, 500)


  const mudarImagem = () => {
    const mudandoImagem = setInterval(() => {
      index === listImages.length - 1 ? index = 0 : index++

      imagemLogin.alt = listImages[index].alt;

      if (window.innerWidth < 800) imagemLogin.src = listImages[index].srcMobile;
      else imagemLogin.src = listImages[index].src;


      return () => {
        clearInterval(mudandoImagem)
      }
    }, 6000)
  }


  return (
    <>
      <img
        src={window.innerWidth < 800 ? listImages[initialIndex].srcMobile : listImages[initialIndex].src}
        alt={listImages[initialIndex].alt}
        id="imagen-login"
      />
    </>
  )
}

export default ImageLogincopy;