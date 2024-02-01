
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nofication from './Nofication';
import Main from './Main';
function App () {

  return (
    <>
      <Routes>
        <Route path='/audio' element={<Nofication />}></Route>
        <Route path='' element={<Main />}></Route>
      </Routes>

    </>
  );
}

export default App;
