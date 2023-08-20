import React from 'react';
import './css/style.scss'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Conta from './components/User/Conta';
import Footer from './components/footer/Footer';
import { UserStorage } from './userContext';
import ProtectedRouter from './components/Utils/ProtectedRouter';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/Utils/NotFound';


const App = () => {

  return (
    <>
      <HashRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/conta/*' element={<ProtectedRouter><Conta /></ProtectedRouter>} />
            <Route path='/perfil/:user' element={<UserProfile />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </HashRouter>
    </>
  );
};

export default App;
