import React, { useRef } from 'react';
import NotificationSound from './assets/mixkit-old-telephone-ring-1357.mp3'

const Nofication = () => {
   const audioPlayer = useRef( null );

   function playAudio () {
      navigator.vibrate( 200 );
      audioPlayer.current.play();
   }
   function stopAudio () {
      audioPlayer.current.pause();
      audioPlayer.current.currentTime = 0; // Reset audio to the beginning
   }
   return (
      <div className="">
         <div className='flex flex-col gap-5  items-center  '>
            <h2>Press the button to play audio</h2>
            <div>
               <button onClick={playAudio} className='border bg-green-700 text-white'>Notification</button>
               <button onClick={stopAudio} className='border bg-red-700 text-white'>Stop Notification</button>
               <audio ref={audioPlayer} src={NotificationSound} />
            </div>
         </div>
      </div>
   );

};


export default Nofication