import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nofication from './Nofication';
function App () {
  const vibrateDevice = () => {
    if ( navigator.vibrate ) {
      navigator.vibrate( 200 );
    } else {
      console.log( 'Vibration API not supported' );
    }
  };

  useEffect( () => {
    return () => {
      navigator.vibrate( 0 );
    };
  }, [] );
  return (
    <div>
      <Routes>
        <Route path='/n' element={<Nofication />}></Route>
      </Routes>
      <h1>Vibration Example</h1>
      <button onClick={vibrateDevice}>Vibrate</button>
    </div>
  );
}

export default App;
