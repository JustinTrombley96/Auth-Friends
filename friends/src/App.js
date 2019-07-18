import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Login} />
    <Route exact path="/profile" component={Profile} />
      
    </div>
  );
}

export default App;
