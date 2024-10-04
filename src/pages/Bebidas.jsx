import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Bebidas = () => {
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setBebidas(data.bebida));
  }, []);

  return (
    <div>
      <h1>Bebidas</h1>
      <div className="card-container">
        {bebidas.map(bebida => <Card key={bebida.nome} item={bebida} />)}
      </div>
    </div>
  );
};

export default Bebidas;
