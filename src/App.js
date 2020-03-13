import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainBody></MainBody>
    </div>
  );
}

export default App;
