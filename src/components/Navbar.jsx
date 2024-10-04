 
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Carnes</Link></li>
        <li><Link to="/massas">Massas</Link></li>
        <li><Link to="/sobremesas">Sobremesas</Link></li>
        <li><Link to="/bebidas">Bebidas</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
