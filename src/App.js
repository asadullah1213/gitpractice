import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Service from "./components/service/service.jsx"

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Service />
    </div>
  );
}

export default App;
