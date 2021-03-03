import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import LandscapePage from './pages/LandscapePage/LandscapePage';
import PortraitPage from './pages/PortraitPage/PortraitPage';


function App() {
  

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => 
        <Feature />
      }>
      </Route>
      <Route exact path="/portrait" render={() => 
        <PortraitPage />
      }>
      </Route>
      <Route exact path="/landscape" render={() => 
      <LandscapePage/>
    }>
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
