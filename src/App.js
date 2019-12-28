import React from 'react';
import './App.css';

const Intro = (props) => (
    <p>
      Our First Functional Component
    </p>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV series List</h1>
      </header>
      <Intro />
    </div>
  );
}

export default App;
