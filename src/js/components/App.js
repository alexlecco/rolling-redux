import React from "react";
import List from './List';
import logo from '../../image.png';
import '../../App.css';

const App = () => (
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
            
            <div>
                <h2>Articles</h2>
                <List />
            </div>

        </header>
    </div>
);

export default App;