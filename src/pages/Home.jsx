import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Bem-vindo ao Receitas Deliciosas!</h1>
      <p>Explore nossas categorias de receitas e descubra pratos incríveis para preparar.</p>
      
      <div className="home-links">
        <Link to="/carnes" className="home-link">Carnes</Link>
        <Link to="/massas" className="home-link">Massas</Link>
        <Link to="/sobremesas" className="home-link">Sobremesas</Link>
        <Link to="/bebidas" className="home-link">Bebidas</Link>
      </div>
    </div>
  );
};

export default Home;
