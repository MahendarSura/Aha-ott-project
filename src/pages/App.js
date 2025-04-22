import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importing Components and Pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gift from './pages/Gift';
import Order from './pages/Order';
import Pay from './pages/Pay';
import Store from './pages/Store';
import Search from './pages/Search';

// App Component
function App() {
  return (
    <BrowserRouter>
      {/* Header Section */}
      <Header />

      {/* Main Routes */}
      <Routes>
        {/* Redirect from / to /dashboard */}
        <Route exact path="/" element={<Navigate replace to="/dashboard" />} />

        {/* Dashboard/Home Route */}
        <Route path="/dashboard" element={<Home />} />

        {/* Gift Cards Route */}
        <Route path="/giftcards" element={<Gift />} />

        {/* Ordering Route */}
        <Route path="/ordering" element={<Order />} />

        {/* Payment Route */}
        <Route path="/pay" element={<Pay />} />

        {/* Store Route */}
        <Route path="/store" element={<Store />} />

        {/* Search Route */}
        <Route path="/search" element={<Search />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;

