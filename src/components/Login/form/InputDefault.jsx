import React from 'react'

const InputDefault = ({ label, name, type, valueRef, error, autocomplete}) => {


  return (
    <div className='wrapper-input'>
      <label className='form-label' htmlFor={name}>{label}</label>
      <input
        className='form-input'
        type={type}
        id={name}
        name={name}
        ref={valueRef}
        autoComplete={autocomplete}
      />
      {error && <p className='mensage-error'>{error}</p>}
    </div>
  )
}

export default InputDefault;