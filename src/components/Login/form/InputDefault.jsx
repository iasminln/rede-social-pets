import { useState } from 'react'
import { IconVisible } from '../../Utils/Icons/IconVisible'
import MessageError from '../../Utils/MessageError'


const InputDefault = ({ label, name, type, valueRef, error,isTextarea,  ...props }) => {
  const [colorVisible, setColorVisible] = useState('#b1b1b1')

  const showPassword = (e) => {
    e.preventDefault()
    const inputPassword = document.getElementById(name);
    const buttonShowPassword = document.getElementById('button-show-password');

    if (inputPassword.type === 'password') {
      inputPassword.type = 'text'
      buttonShowPassword.setAttribute('aria-label', 'Esconder senha');
      setColorVisible('#333')
    } else {
      inputPassword.type = 'password'
      buttonShowPassword.setAttribute('aria-label', 'Mostrar senha. Aviso: isso exibirá sua senha na tela.');
      setColorVisible('#b1b1b1')
    }
  }


  return (
    <div className='wrapper-input'>
      <label className='form-label' htmlFor={name}>{label}</label>

      {isTextarea ?
        <textarea
          className='form-input'
          type={type}
          id={name}
          name={name}
          ref={valueRef}
          {...props}
        />
        :

        <input
          className='form-input'
          type={type}
          id={name}
          name={name}
          ref={valueRef}
          {...props}
        />
}

      {name === 'passwordElement' ?
        <button
          id='button-show-password'
          aria-label='Mostrar senha. Aviso: isso exibirá sua senha na tela.'
          className='button-show-password'
          onClick={showPassword}>
          <IconVisible colorVisible={colorVisible} />
        </button>
        : null}

      <MessageError error={error} />
    </div>
  )
}

export default InputDefault;