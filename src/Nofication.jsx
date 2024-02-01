import React, { useEffect, useState } from 'react';

const Nofication = () => {
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
      // Clean up the vibration when the component unmounts
      return () => {
         vibrateDevice( 0 );
      };
   }, [] );
   return (
      <div>
         <div>
            <h1>Vibration and Custom Popup Example</h1>
            <button onClick={openPopup}>Vibrate for 5 seconds and show popup</button>

            {showModal && (
               <div className="modal">
                  <div className="modal-content">
                     <p>Vibrating for 5 seconds. Do you want to stop it?</p>
                     <button onClick={closePopup}>Stop</button>
                     <button onClick={closePopup}>Continue</button>
                  </div>
               </div>
            )}
         </div>
      </div>
   )
}

export default Nofication