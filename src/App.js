import React from 'react';
import logo from './image.png';
import './App.css';
import ExampleComponent from './ExampleComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.valentinog.com/blog/redux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Redux/React
        </a>
        <ExampleComponent />
      </header>
    </div>
  );
}

export default App;
