// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import AccountPage from './components/AccountPage';

import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <UserProvider>
        <CartProvider>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/account" element={<AccountPage />} />
            </Routes>
          </Container>
        </CartProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
