import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserPost from './UserPost';
import Estatisticas from './Estatisticas';
import Title from '../Utils/Title';
import { UserContext } from '../../userContext';
import NotFound from '../Utils/NotFound';
import Head from '../Utils/Head';


const Conta = () => {
  const { data } = useContext(UserContext)


  return (
    <div className="wrapper-user-pages">
      <Routes>
        <Route path='/' element={
          <>
            <Head title='Minhas fotos' />
            <Title>Minhas fotos</Title>
            <Feed user={data.id} />
          </>
        } />
        <Route path='post' element={<UserPost />} />
        <Route path='/estatisticas' element={<Estatisticas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default Conta;