import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import CartItem from './CartItem';


const Pizza = () => {
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


  // Inicia con todas las pizzas en 0
const [cartItems, setCartItems] = useState(pizzas.map((pizza) => ({...pizza, quantity: 0,})));

  //aumentar la cantidad
const increaseQuantity = (productId) => {setCartItems((prevItems) => prevItems.map((item) =>
    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item ));};
  //disminuir la cantidad
const decreaseQuantity = (productId) => {setCartItems((prevItems) => prevItems.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 } : item));};
  // Función para calcular el total
const getTotal = () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const itemsInCart = cartItems.filter(item => item.quantity > 0);



  return (
    <div style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {cartItems.map((item) => (
          <CartItem
            key={pizza.id}
            item={item}
            onRemove={decreaseQuantity} // resta
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
        ))}
      </ListGroup>
      <div className="total-section" style={{ marginTop: '20px', textAlign: 'right' }}>
        <h4>Total a pagar: ${getTotal()}</h4>
        <Button variant="success">Comprar</Button>
      </div>
    </div>
  );
};

export default Pizza;