import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

function Home() { 
  const [pizzas, setPizzas] = useState([]);  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        if (!response.ok) {
          throw new Error('Error al obtener las pizzas');}

        const data = await response.json();
          setPizzas(data);} 
          catch (err) {setError(err.message);}
          finally {setLoading(false);}};

    fetchPizzas();}, []);

  if (loading) return <p>Cargando pizzas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='Home'>
      <Header />
      <div className="card-container">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            foto={pizza.img}
            titulo={pizza.name}
            ingredients={pizza.ingredients.join(', ')}
            valor={pizza.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
