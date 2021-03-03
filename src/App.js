import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import Landscape from './components/Portfolio/Landscape';
import {pictureDB} from './picutreDB';

function App() {
  const [pics, setPics] = useState()

  useEffect(() => {
    pictureDB.map(picture => {
      setPics(picture)
    })

  }, [])

  return (
    <Router>
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => 
        <Feature />
      }>
      </Route>
      <Route exact path="/portrait" render={() => 
        <Portfolio />
      }>
      </Route>
      <Route exact path="/landscape" render={() => 
      <Landscape picture={pics}/>
    }>
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
