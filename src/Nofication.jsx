import React, { useRef } from 'react';
import NotificationSound from './assets/mixkit-old-telephone-ring-1357.mp3'

const Nofication = () => {
   const audioPlayer = useRef( null );

   function playAudio () {
      navigator.vibrate( 200 );
      audioPlayer.current.play();
   }

   return (
      <div className="App">
         <div>
            <h2>Press the button to play audio</h2>
            <button onClick={playAudio}>Notification</button>
            <audio ref={audioPlayer} src={NotificationSound} />
         </div>
      </div>
   );

};


export default Nofication