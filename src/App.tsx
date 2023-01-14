import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

import Router from './router';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
    <Router/>
  );
}

export default App;
