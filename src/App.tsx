import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login/Login';
import Protected from './components/Protected';

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <Protected><Home/></Protected>}/>
      </Routes>
    </>
  );
}

export default App;
