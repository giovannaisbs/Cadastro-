import React from 'react';

const Card = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.nome}</h3>
      <p>{item.descrição}</p>
      <details>
        <summary>Receita</summary>
        <p>{item.receita}</p>
      </details>
    </div>
  );
};

export default Card;

