/* import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
 */

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Cuestionario from "./components/Cuestionario";
import Home from "./components/Home";
import "./styles/styles.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuestionario" element={<Cuestionario />} />
      </Routes>
    </Router>
  );
};

export default App;
