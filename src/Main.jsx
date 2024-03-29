import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Localstorage from './Localstorage';

const Main = () => {
   const vibrateDevice1 = () => {
      if ( navigator.vibrate ) {
         navigator.vibrate( 200 );
      } else {
         console.log( 'Vibration API not supported' );
      }
   };

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

   // const clinet = [order1,order1]
   // const previosorder = [order1, order2]
   // const funciton ( ) = > {

   // }
   return (
      <div className='w-screen  gap-5 text-center flex  flex-col justify-content-center  items-center '>
         {/* <Nofication /> */}
         <h1 className='text-4xl  mb-10'>Vibration Example web to mobile test </h1>
         <button onClick={vibrateDevice1} className='text-white bg-blue-700'>Vibrate</button>

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
         <Link to='/audio' className='px-3 py-2 bg-blue-900 text-white'>Audio notification check</Link>

         <Link to='/l' className='px-3 py-2 bg-blue-900 text-white'>localstorage check</Link>

         <Localstorage />
      </div>
   )
}

export default Main