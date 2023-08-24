import { Route, Routes } from 'react-router-dom';
import UserPost from './UserPost';
import Estatisticas from './Estatisticas';
import NotFound from '../Utils/NotFound';
import MinhasFotos from './MinhasFotos';

const Conta = () => {
  
  return (
    <div className="wrapper-user-pages">
      <Routes>
        <Route path='/' element={<MinhasFotos/>} />
        <Route path='post' element={<UserPost />} />
        <Route path='/estatisticas' element={<Estatisticas />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default Conta;