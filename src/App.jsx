import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetails from './components/ProductDetails';

import "./index.css";
import Background from './components/Background';

const App = () => {
  return (

    <Router>
      <div className=" text-white">
      <Background/>
      
      <Header />
      
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product/:productId" element={<ProductDetails />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
