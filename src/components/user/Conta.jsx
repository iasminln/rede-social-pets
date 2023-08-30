import { Route, Routes } from 'react-router-dom';
import UserPost from './UserPost';
import NotFound from '../Utils/NotFound';
import MinhasFotos from './MinhasFotos';
import MinhaConta from './MinhaConta';

const Conta = () => {
  
  return (
    <div className="wrapper-user-pages">
      <Routes>
        <Route path='/' element={<MinhaConta/>} />
        <Route path='post' element={<UserPost />} />
        <Route path='/fotos' element={<MinhasFotos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default Conta;