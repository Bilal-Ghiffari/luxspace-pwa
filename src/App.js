import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Details from './components/Details';
import Carts from './pages/Carts';
import LandingPage from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  const cacheCart = localStorage.getItem("cart");
  const [cart, setCart] = useState([]);

  function handleAddToCart(item){
    const currentIndex = cart.length;
    const newCart = [...cart, {id: currentIndex + 1, item}];
    // update cart
    setCart(newCart)
    localStorage.setItem("cart", JSON.stringify(newCart))
  }

  function handleRemoveCart(id){
    const filterCart = cart.filter(function(item) {
      return item.id !== id;
    })
    setCart(filterCart)
    localStorage.setItem("cart", JSON.stringify(filterCart))
  }

  useEffect(() => {
    if(cacheCart !== null){
      setCart(JSON.parse(cacheCart))
    }
  }, [cacheCart])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage cart={cart} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/details/:id' element={<Details handleAddToCart={handleAddToCart} cart={cart} />} />
        <Route path='/cart' element={<Carts cart={cart} handleRemoveCart={handleRemoveCart} />} />
      </Routes>
    </Router>
  );
}
