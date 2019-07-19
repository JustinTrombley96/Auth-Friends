import React from 'react';
import './App.css';
// import { Route } from 'react-router-dom'
import Login from './components/Login';
import 'semantic-ui-css/semantic.min.css'
import FriendsList from './components/FriendsList'
import ProtectedRoute from './components/ProtectedRoute'
import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
    <Route exact path="/" component={Login} />
        <ProtectedRoute exact path='/friends'  component={FriendsList}/>
    </div>
  );
}

export default App;
