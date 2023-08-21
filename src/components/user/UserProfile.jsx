import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'
import Title from '../Utils/Title'
import Head from '../Utils/Head'

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className='user-profile'>
      <Head title={user}/>
      <Title>{user}</Title>
      <Feed user={user}  />
    </section>
  )
}

export default UserProfile