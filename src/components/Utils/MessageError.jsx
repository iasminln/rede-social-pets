import React from 'react'


const MessageError = ({ error }) => {


  return (
    <>
      {error && <p className='mensage-error'>{error}</p>}
    </>
  )
}

export default MessageError;