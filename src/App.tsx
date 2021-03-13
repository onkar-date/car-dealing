import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import Topnav from './components/Topnav/Topnav';
import Bottomnav from './components/Footer/Bottomnav';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <React.Fragment>
      <Topnav></Topnav>
      <Routes></Routes>
      <Bottomnav></Bottomnav>
    </React.Fragment>
  );
}

export default App;
