import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout'; // Layout with NavBar
import Login from './pages/UserPanel/Login';
import Scanner from './pages/UserPanel/Scanner';
import Main from './pages/UserPanel/Main';
import List from './pages/UserPanel/List';
import Cart from './pages/UserPanel/Cart';
import SingUp from './pages/UserPanel/SingUp';
import Orders from './pages/UserPanel/Orders';




function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signUp' element={<SingUp/>}/>
        <Route path="/" element={<Login/>} />
        <Route path="/scanner" element={<Scanner/>} />
        <Route path="/main" element={<Layout />}>
          <Route index element={<Main/>} />
          <Route path='list' element={<List />} />
          <Route path='cart' element={<Cart />} />
          <Route path='orders' element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
