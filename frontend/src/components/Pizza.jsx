import React from 'react';

const Pizza = ({ pizza, onBack }) => {
  if (!pizza) return null; // Si no hay pizza seleccionada, no mostrar nada

  return (
    <div className='carta'>
      <h2 style={{textTransform: 'uppercase' , fontSize: '40px' }}>{pizza.name}</h2>
      <img style={{ width: '22rem', margin: '5px', alignItems: 'center', borderRadius: '5%' }} src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <p style={{ fontSize: '30px' }}><strong>Precio: ${pizza.price}</strong></p>
      <button onClick={onBack}>Volver</button>
    </div>
  );
};

export default Pizza;