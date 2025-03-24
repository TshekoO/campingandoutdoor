// import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import HeroSection from './HeroSection/HeroSection'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="app">

        <HeroSection/>
      </div>
    </Router>
  )
}

export default App
