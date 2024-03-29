import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import LandscapePage from './pages/LandscapePage/LandscapePage';
import PortraitPage from './pages/PortraitPage/PortraitPage';
import AboutPage from './pages/AboutPage/About';
import ContactPage from './pages/ContactPage/ContactPage';
import ServicesPage from './pages/ServicesPage/Services';


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
      <Route exact path="/about" render={() =>
      <AboutPage />
      }>
      </Route>
      <Route exact path="/contact" render={() => 
        <ContactPage />
      }>
      </Route>
      <Route exact path="/services" render={() => 
      <ServicesPage />
      }>
      </Route>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
