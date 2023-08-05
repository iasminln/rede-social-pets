import React from 'react';
import './css/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login/Login';
import Home from './components/Home';
import Footer from './components/Footer';


const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
