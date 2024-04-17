import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
// import Contact from './components/Contact';
// import About from './components/About';
import { PrimeReactProvider} from 'primereact/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';


export default function App() {
  return (
    <>
    <PrimeReactProvider>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}
