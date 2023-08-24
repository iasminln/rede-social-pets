import './css/style.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Conta from './components/User/Conta';
import Footer from './components/footer/Footer';
import { UserStorage } from './userContext';
import ProtectedRouter from './components/Utils/ProtectedRouter';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/Utils/NotFound';
import PhotoPage from './components/Photo/PhotoPage';


const App = () => {

  return (
    <div className='app'>
      <HashRouter>
        <UserStorage>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login/*' element={<Login />} />
              <Route path='/conta/*' element={<ProtectedRouter><Conta /></ProtectedRouter>} />
              <Route path='/foto/:id' element={<PhotoPage />} />
              <Route path='/perfil/:user' element={<UserProfile />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </HashRouter>
    </div>
  );
};

export default App;
