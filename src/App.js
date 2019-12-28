import React from 'react';
import Intro from './components/Intro';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">TV series List</h1>
      </header>
      <Intro message="Here you can find all of your most loved series" />
    </div>
  );
}

export default App;
