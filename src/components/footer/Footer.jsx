import React from 'react'
import { IconEmail, IconGithub, IconLinkedin } from './Icons';

const Footer = () => {
  return (
    <footer>
      <p className='text01'>DoCaSocial - Alguns direitos reservados!</p>
      <p className='text02'>Criado por: <span>Iasmin Lisboa Nogueira</span></p>

      <div className='image-links'>
        <a href="https://www.linkedin.com/in/iasminln/" target='_blank' rel="noreferrer" title='Linkedin'><IconLinkedin /></a>
        <a href="https://github.com/iasminln" target='_blank' rel="noreferrer" title='GitHub'><IconGithub /></a>
        <a href="mailto:iasmin.ln94@gmail.com" target='_blank' rel="noreferrer" title='Email'><IconEmail /></a>
      </div>

    </footer>
  )
}

export default Footer;