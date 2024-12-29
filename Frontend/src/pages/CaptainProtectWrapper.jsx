import React, { createContext, useState, useEffect, useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CaptainProtectWrapper = ({
    children
}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

const {captain, setCaptain} = useContext(CaptainDataContext)
const [isLoading,setIsLoading] = useState(true)

   useEffect(() => {
    if (!token) {
      navigate('/captain-login')
    }
  }, [token])

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
headers: {
Authorization: `Bearer ${token}`
}
  }).then((response)=>{
if(response.status === 200){
    const data = response.data
    setCaptain(data.captain)
    setIsLoading(false)
}
  }).catch((error)=>{
    console.log(error)
    localStorage.removeItem('token')
    navigate('/captain-login')
  })

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper
