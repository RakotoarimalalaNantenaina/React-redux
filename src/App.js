import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './films/listesfilm'
import Rechercher from './films/recherche'

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Rechercher/>
        <List/> 
      </div>
    );
  }
}

export default App;
