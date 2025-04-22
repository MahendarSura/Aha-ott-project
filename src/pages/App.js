import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Lazy loading components
const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const Gift = React.lazy(() => import('./pages/Gift'));
const Order = React.lazy(() => import('./pages/Order'));
const Pay = React.lazy(() => import('./pages/Pay'));
const Store = React.lazy(() => import('./pages/Store'));
const Search = React.lazy(() => import('./pages/Search'));

// App Component
function App() {
  return (
    <BrowserRouter>
      {/* Lazy load Header */}
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      {/* Main Routes */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Redirect from / to /dashboard */}
          <Route path="/" element={<Navigate replace to="/dashboard" />} />

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
      </Suspense>

      {/* Lazy load Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;


