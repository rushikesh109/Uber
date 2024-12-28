import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home> }></Route>
        <Route path='/captain-login' element={<Captainlogin></Captainlogin> }></Route>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup> }></Route>  
        <Route path='/login' element={<UserLogin></UserLogin> }></Route>
        <Route path='/signup' element={<UserSignup></UserSignup> }></Route>
      </Routes>
    </div>
  )
}

export default App
