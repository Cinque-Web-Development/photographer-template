import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => 
        <Feature />
      }>
      </Route>
      <Route exact path="/portfolio" render={() => 
        <Portfolio />
      }>
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
