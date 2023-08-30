import { useContext } from 'react'
import Feed from '../Feed/Feed'
import Title from '../Utils/Title'
import Head from '../Utils/Head'
import { UserContext } from '../../userContext'


const MinhasFotos = () => {
  const { data } = useContext(UserContext)

  return (
    <section className='user-profile'>
      <Head title='Minhas fotos' />

      <Title>Minhas fotos</Title>
      <Feed user={data.id} />
    </section>
  )
}

export default MinhasFotos