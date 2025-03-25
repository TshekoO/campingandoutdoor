import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import About from './About/About';
import Equipment from './Equipment/Equipment';

function App() {
  return (
    <Router>
      <div className="app">
        <HeroSection />
        <About/>
        <Equipment/>
      </div>
    </Router>
  );
}

export default App;
