import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carnes from './pages/Carnes';
import Massas from './pages/Massas';
import Sobremesas from './pages/Sobremesas';
import Bebidas from './pages/Bebidas';
import Login from './pages/Login';
import Signup from './pages/Signup';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/carnes" element={<PrivateRoute element={<Carnes />} />} />
        <Route path="/massas" element={<PrivateRoute element={<Massas />} />} />
        <Route path="/sobremesas" element={<PrivateRoute element={<Sobremesas />} />} />
        <Route path="/bebidas" element={<PrivateRoute element={<Bebidas />} />} />
      </Routes>
    </Router>
  );
};

export default App;
