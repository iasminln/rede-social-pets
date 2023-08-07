import React from 'react'
import '../../css/style.scss'

const ButtonDefault = ({ children, ...props }) => {


  return (
    <>
      <button {...props} className='button-default'>{children}</button>
    </>
  )
}

export default ButtonDefault;