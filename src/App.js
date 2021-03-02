import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Feature />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
