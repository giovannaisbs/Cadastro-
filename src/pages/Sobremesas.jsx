import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const Sobremesas = () => {
  const [sobremesas, setSobremesas] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setSobremesas(data.sobremesa));
  }, []);

  return (
    <div>
      <h1>Sobremesas</h1>
      <div className="card-container">
        {sobremesas.map(sobremesa => <Card key={sobremesa.nome} item={sobremesa} />)}
      </div>
    </div>
  );
};

export default Sobremesas;
