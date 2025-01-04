import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start></Start> }></Route>
        <Route path='/captain-login' element={<Captainlogin></Captainlogin> }></Route>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup> }></Route>  
        <Route path='/login' element={<UserLogin></UserLogin> }></Route>
        <Route path='/riding' element={<Riding />}></Route>
        <Route path='/captain-riding' element={<CaptainRiding />}></Route>
        <Route path='/signup' element={<UserSignup></UserSignup> }></Route>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
         }></Route>
        <Route path='/UserLogout' element={
          <UserProtectWrapper>
           <UserLogout/>
          </UserProtectWrapper> }>
       </Route>
       <Route path='/captainHome' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
          }>
        </Route>
        <Route path='/captainLogout' element={
          <CaptainProtectWrapper>
           <CaptainLogout/>
          </CaptainProtectWrapper> }>
        </Route>
   </Routes>
    </div>
  )
}

export default App
