import React from 'react';
import './App.css';
import Count from './UseEffCount';
import Dashboard from './dashboard/Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';
//import RouterComponent from './Router/RouterComponent';

function App() {
  return (
    <div className="App">
    <Router>
      <Dashboard/>
      <Count></Count>
    </Router>
    </div>
  );
}

export default App;
