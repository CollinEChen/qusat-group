import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import FCCLicenses from './pages/FCCLicenses';
import Services from './pages/Services';
import Streaming from './pages/Streaming';
import Innovations from './pages/Innovations';
import Contact from './pages/Contact';
import Partnerships from './pages/Partnerships';
import DataCenters from './pages/DataCenters';
import Tokenization from './pages/Tokenization';
import MarketRevenue from './pages/MarketRevenue';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/fcc-licenses" element={<FCCLicenses />} />
            <Route path="/services" element={<Services />} />
            <Route path="/streaming" element={<Streaming />} />
            <Route path="/innovations" element={<Innovations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/data-centers" element={<DataCenters />} />
            <Route path="/tokenization" element={<Tokenization />} />
            <Route path="/market-revenue" element={<MarketRevenue />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;