import React, { useState, useEffect } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nofication from './Nofication';
function App () {
  // const vibrateDevice = () => {
  //   if ( navigator.vibrate ) {
  //     navigator.vibrate( 200 );
  //   } else {
  //     console.log( 'Vibration API not supported' );
  //   }
  // };

  const [showModal, setShowModal] = useState( false );
  const vibrateDevice = ( duration ) => {
    if ( navigator.vibrate ) {
      navigator.vibrate( duration );
    } else {
      console.log( 'Vibration API not supported' );
    }
  };

  const closePopup = () => {
    setShowModal( false );
    vibrateDevice( 0 ); // Stop the vibration
  };

  const openPopup = () => {
    setShowModal( true );
    vibrateDevice( 5000 ); // Vibrate for 5000 milliseconds (5 seconds)
  };


  useEffect( () => {
    return () => {
      navigator.vibrate( 0 );
    };
  }, [] );
  return (
    <div className='w-screen mt-80 gap-5 text-center flex  flex-col justify-content-center  items-center '>
      {/* <Routes>
        <Route path='/n' element={<Nofication />}></Route>
      </Routes> */}
      {/* <Nofication /> */}
      <h1 className='text-4xl  mb-10'>Vibration Example web to mobile test </h1>
      <button onClick={vibrateDevice} className='text-white bg-blue-700'>Vibrate</button>

      <div>
        <div className=' mb-10'>
          <h1 className='text-4xl mb-10'>Vibration and Custom Popup Example</h1>
          <button onClick={openPopup} className='border bg-red-800 text-white'>Book order</button>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <p>Placed order by some Please accept.</p>
                <button onClick={closePopup}>Stop</button>
                <button onClick={closePopup}>Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
