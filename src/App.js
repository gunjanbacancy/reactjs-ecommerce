import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;