import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header.jsx';
import Body from './components/body/body.jsx';
import Service from "./components/service/service.jsx"
import Servicebox from './components/service-box/service-box.jsx';

function App() {

  
  return (
    <div className="App">
      <Header />
      <Body />
      <Service />
      <Servicebox />

    </div>
  );
}

export default App;
