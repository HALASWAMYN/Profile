import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePortel from './components/HomePortel';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';



function App() {


  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/home/*' element={<HomePortel/>}/>

      </Routes>
    </BrowserRouter>


  );
}

export default App;