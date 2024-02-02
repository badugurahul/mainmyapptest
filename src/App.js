
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nofication from './Nofication';
import Main from './Main';
import Localstorage from './Localstorage'
function App () {

  return (
    <>
      <Routes>
        <Route path='/audio' element={<Nofication />}></Route>
        <Route path='' element={<Main />}></Route>
        <Route path='/l' element={<Localstorage />}></Route>
      </Routes>

    </>
  );
}

export default App;
