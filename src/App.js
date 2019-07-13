import React from 'react';
import logo from './logo.svg';
import './App.css';
import './component/AccessBundle/accessbundle.scss';
import LandingPage from './component/LandingPage/index';
import AccessBundle from './component/AccessBundle/index';

function App() {
  return (
    <div className="App">
      <AccessBundle target={'signup'} />
    </div>
  );
}

export default App;

