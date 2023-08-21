import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Title from '../Utils/Title'

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='user-profile'>
      <Title>{user}</Title>
      <Feed user={user}  />
    </section>
  )
}

export default UserProfile