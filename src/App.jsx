import React from 'react';
import './css/style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Conta from './components/user/Conta';
import Footer from './components/footer/Footer';
import { UserStorage } from './userContext';
import ProtectedRouter from './components/Utils/ProtectedRouter';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login/*' element={<Login />} />
            <Route path='/conta/*' element={<ProtectedRouter><Conta /></ProtectedRouter>} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
