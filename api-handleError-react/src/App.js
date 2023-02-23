import React, { Component } from 'react';
import Frieza from './components/Frieza';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';
import './App.css';
import ErrorBoundary from './errors/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <div className='container text-info text-center'>
        <h1>Cliquer sur les Gentils</h1>
        <hr />
        <div className='row'>
          <Vegeta />
          <Goku />
          <ErrorBoundary>
            <Frieza />
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default App;
