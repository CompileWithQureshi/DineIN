import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout'; // Layout with NavBar
import Main from './pages/UserPanel/Main'; // Main page with NavBar
import Login from './pages/UserPanel/Login'; // Login page without NavBar
import Scanner from './pages/UserPanel/Scanner'; // Scanner page without NavBar
import Cart from './pages/UserPanel/Cart'; // Corrected import
import Orders from './pages/UserPanel/Orders'; // Corrected import
import List from './pages/UserPanel/List'; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="scanner" element={<Scanner />} />
        <Route path="main" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='list' element={<List />} />
          <Route path='cart' element={<Cart />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
