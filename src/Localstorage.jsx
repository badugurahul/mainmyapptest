import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Localstorage = () => {
   const [name, setName] = useState( '' );
   const [email, setEmail] = useState( '' );
   const [image, setImage] = useState( null );
   const [displayInfo, setDisplayInfo] = useState( null );

   const submitForm = () => {
      // Check if an image is selected
      if ( !image ) {
         alert( 'Please select an image' );
         return;
      }

      // Convert the image to base64
      const reader = new FileReader();
      reader.onload = ( e ) => {
         const imageData = e.target.result;

         // Save data to local storage
         const userData = {
            name,
            email,
            image: imageData,
         };
         localStorage.setItem( 'userData', JSON.stringify( userData ) );

         // Display user information
         setDisplayInfo( userData );
      };
      reader.readAsDataURL( image );
   };

   const clearLocalStorage = () => {
      localStorage.removeItem( 'userData' );
      setDisplayInfo( null ); // Clear the displayed information
   };

   useEffect( () => {
      // Check if there is stored data on component mount
      const storedUserData = localStorage.getItem( 'userData' );
      if ( storedUserData ) {
         const parsedData = JSON.parse( storedUserData );
         setDisplayInfo( parsedData );
      }
   }, [] );

   return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">

         <Link to={'/'} className='p-2 rounded-md bg-green-600 text-white'>Back</Link>
         <h2 className="text-2xl font-semibold mb-4 mt-6">User Information</h2>
         <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
               type="text"
               id="name"
               className="mt-1 p-2 w-full border rounded-md"
               value={name}
               onChange={( e ) => setName( e.target.value )}
               required
            />
         </div>
         <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
               type="email"
               id="email"
               className="mt-1 p-2 w-full border rounded-md"
               value={email}
               onChange={( e ) => setEmail( e.target.value )}
               required
            />
         </div>
         <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700">Upload Image:</label>
            <input
               type="file"
               id="image"
               className="mt-1 p-2 w-full border rounded-md"
               accept="image/*"
               onChange={( e ) => setImage( e.target.files[0] )}
               required
            />
         </div>
         <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md mr-2 w-full md:w-auto"
            onClick={submitForm}
         >
            Submit
         </button>
         <button
            type="button"
            className="bg-gray-500 text-white p-2 rounded-md w-full md:w-auto"
            onClick={clearLocalStorage}
         >
            Clear Local Storage
         </button>

         {displayInfo && (
            <div className="mt-6">
               <h3 className="text-xl font-semibold mb-2">User Information:</h3>
               <p><strong>Name:</strong> {displayInfo.name}</p>
               <p><strong>Email:</strong> {displayInfo.email}</p>
               <p><strong>Image:</strong></p>
               <img src={displayInfo.image} alt="User" className="max-w-full mt-2" />
            </div>
         )}
      </div>

   );
}

export default Localstorage