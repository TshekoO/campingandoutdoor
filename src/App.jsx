
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Equipment from './pages/EquipmentPage';
import Shop from './pages/ShopPage';
import Home from './pages/HomePage';


function App() {
  return (
    <Router>
 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/equipment' element={<Equipment />} />
      </Routes>
    </Router>
  );
}

export default App;
