import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Carnes = () => {
  const [carnes, setCarnes] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setCarnes(data.carne));
  }, []);

  return (
    <div>
      <h1>Carnes</h1>
      <div className="card-container">
        {carnes.map(carne => <Card key={carne.nome} item={carne} />)}
      </div>
    </div>
  );
};

export default Carnes;
