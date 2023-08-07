import React from 'react'
import '../../css/style.scss'

const InputDefault = ({ label, name, type, valueRef, error}) => {


  return (
    <div className='wrapper-input'>
      <label className='form-label' htmlFor={name}>{label}</label>
      <input
        className='form-input'
        type={type}
        id={name}
        name={name}
        ref={valueRef}
      />
      {error && <p className='mensage-error'>{error}</p>}
    </div>
  )
}

export default InputDefault;