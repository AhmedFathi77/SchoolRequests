import React from 'react';
import './App.css';
import AuthenticationRoutes from './components/authenticatedRoutes';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <HashRouter> 
        <Navbar />
        <AuthenticationRoutes />
      </HashRouter>
    </div>
  );
}

export default App;
