import React from 'react';
import './guitar.scss';
import GuitarNeck from './Components/GuitarNeck';

function App() {
  return (
    <div className="guitar with-nut">
      <GuitarNeck />
    </div>
  );
}

export default App;
