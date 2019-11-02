import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className={'text-input'} id={'name'} placeholder={'Enter your name'} />
        <button className={'button-input'}>
            Enter
        </button>
      </header>
    </div>
  );
}

export default App;
