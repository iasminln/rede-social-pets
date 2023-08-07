import React from 'react'
import '../../css/style.scss'

const InputDefault = ({ label, name, type }) => {


  return (
    <div className='wrapper-input'>
      <label className='form-label' htmlFor={name}>{label}</label>
      <input
        className='form-input'
        type={type}
        id={name}
        name={name}
      />
    </div>
  )
}

export default InputDefault;