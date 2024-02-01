import React, { useEffect } from 'react';
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
      <h1>Vibration Example</h1>
      <button onClick={vibrateDevice}>Vibrate</button>
    </div>
  );
}

export default App;
