import React from 'react';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import './App.css'
import Footer from './pages/Footer';
import Skills from './pages/Skills';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Skills/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
