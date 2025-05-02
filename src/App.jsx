
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Equipment from './pages/EquipmentPage';
import Shop from './pages/ShopPage';
import About from './About/About';
import Home from './pages/HomePage';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

import { CartProvider } from "./CartContext/CartContext";

function App() {
  return (
    <CartProvider>
    <Router>
      <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  </CartProvider>
  );
}

export default App;
