import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IThing} from './MyComponentInterfaces';
import MyComponent from './MyComponent';

function App() {
  const things:IThing[] = [{id:"1",message:"hello"},{id:"2",message:"world"}];
  return (
    <div className="App">
      <MyComponent message="Je suis le parent" things={things} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
