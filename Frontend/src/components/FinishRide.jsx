import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div >
    <h5
    className="p-1 text-center w-[93%] absolute top-0"
    onClick={() => {
     props.setFinishRidePanel(false);
    }}
  >
    <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
  </h5>
  <h3 className="text-2xl font-semibold md-5">Finish this Ride</h3>
  <div className='flex items-center justify-between p-3 border-2 border-yellow-400 rounded-lg mt-4'>
    <div className='flex items-center gap-3'>
        <img className='h-12 w-12 rounded-full object-cover' src="https://st2.depositphotos.com/2931363/6569/i/450/depositphotos_65699901-stock-photo-black-man-keeping-arms-crossed.jpg" alt="" />
        <h2 className='text-lg font-medium'>Ramhari</h2>
    </div>
    <h5 className='text-lg font-semibold'>2.2KM</h5>
  </div>
 <div className='flex gap-2 justify-between flex-col items-center'>
 <div className='w-full mt-5'>
  <div className='flex items-center gap-5 p-3 border-b-2'>
    <i className='ri-map-pin-user-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>567/12</h3>
        <p className='text-sm -mt-1 text-gray-600 '>Godavari River, Pune</p>
    </div>
  </div>
  <div  className='flex items-center gap-5 p-3 border-b-2'>
  <i className='text-lg ri-map-pin-2-fill'></i>
    <div>
        <h3 className='text-lg font-medium'>567/12</h3>
        <p className='text-sm -mt-1 text-gray-600 '>Godavari River, Pune</p>
    </div>
  </div>
  <div  className='flex items-center gap-5 p-3'>
  <i className='ri-currency-line'></i>
    <div> 
        <h3 className='text-lg font-medium'>₹193.20</h3>
        <p className='text-sm -mt-1 text-gray-600 '> CASH</p>
    </div>
  </div>
 </div>
<div className='mt-10 w-full'>
<Link to='/captainHome'
 className='w-full mt-2 flex text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</Link>
</div>
 </div>
</div>
  )
}

export default FinishRide
