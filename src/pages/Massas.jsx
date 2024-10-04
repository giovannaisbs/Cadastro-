import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Massas = () => {
  const [massas, setMassas] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setMassas(data.massa));
  }, []);

  return (
    <div>
      <h1>Massas</h1>
      <div className="card-container">
        {massas.map(massa => <Card key={massa.nome} item={massa} />)}
      </div>
    </div>
  );
};

export default Massas;
