import React from 'react';
import './css/scss/style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Footer from './components/Footer';


const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
