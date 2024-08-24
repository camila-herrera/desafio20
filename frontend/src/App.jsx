import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Narvar from './components/Narvar';
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Pizza from './components/Pizza';
import { useState } from 'react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedPizza, setSelectedPizza] = useState(null);
  const handleShowRegister = () => {setCurrentView('register');};
  const handleShowHome = () => {setCurrentView('home'); setSelectedPizza(null); };
  const handleShowLogin = () => {setCurrentView('login');};
  const handleShowCart = () => {setCurrentView('cart');};
  
  const handleSelectPizza = (pizza) => {
    setSelectedPizza(pizza); // Establecemos la pizza seleccionada
    setCurrentView('pizza'); // Cambiamos la vista al componente Pizza
  };

return (
<div>
  <Narvar onRegisterClick={handleShowRegister} onHomeClick={handleShowHome} onLoginClick={handleShowLogin} onCartClick={handleShowCart}/>
  {currentView === 'home' && <Home onSelectPizza={handleSelectPizza} />}
  {currentView === 'register' && <Register/>}
  {currentView === 'login' && <Login/>}
  {currentView === 'cart' && <Cart/>}
  {currentView === 'pizza' && <Pizza pizza={selectedPizza} onBack={handleShowHome} />}
  <Footer/>
</div>
);
}
export default App;