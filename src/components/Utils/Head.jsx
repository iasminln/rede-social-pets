import React, { useEffect } from 'react'

const Head = ({ title }) => {

  useEffect(() => {
    document.title = title + ' | Petbook'
  }, [title]);

  return (
    <></>
  )
}

export default Head