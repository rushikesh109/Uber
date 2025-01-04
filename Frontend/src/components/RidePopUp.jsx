import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
        <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
         props.setRidePopUpPanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold md-5">New Ride Available!</h3>
      <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
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
       <div className='flex mt-5 w-full items-center justify-between'>
       <button 
     onClick={() => {
        props.setRidePopUpPanel(false);
     }}
     
     className=' mt-1 bg-gray-200 text-gray-700 font-semibold p-3 px-10 rounded-lg'>Ignore</button>
       <button 
     onClick={() => {
     props.setConfirmRidePopUpPanel(true);
    }
        }
     className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Accept</button>
      
       </div>
     </div>
    </div>
  )
}

export default RidePopUp
