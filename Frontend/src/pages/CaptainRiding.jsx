import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide';
import gsap from 'gsap';

const CaptainRiding = () => {

    const [FinishRidePanel, setFinishRidePanel] = useState(false);
    const FinishRidePanelRef = useRef(null);


    React.useEffect(() => {
        if (FinishRidePanel) {
          gsap.to(FinishRidePanelRef.current, {
            transform: 'translateY(0)',
            duration: 0.5,
          });
        } else {
          gsap.to(FinishRidePanelRef.current, {
            transform: 'translateY(100%)',
            duration: 0.5,
          });
        }
      }, [FinishRidePanel]);
    
  return (

<div className='h-screen'>
    
   <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
    <img  className="w-16 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
    <Link to='/captainHome' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className='text-lg font-medium ri-logout-box-r-line'></i>
    </Link> 
    </div>  
    <div className='h-4/5'>
    <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='uber-location' />
    </div>
  <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'
  onClick={() => {
setFinishRidePanel(true)
  }}
  >
  <h5
        className="p-1 text-center w-[95%] absolute top-0"
      >
        <i className=" text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
      </h5>
  <h4 className='text-xl font-semibold'>4 KM away</h4>
  <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
  </div>
  <div ref={FinishRidePanelRef}
    className="fixed w-full z-10 bg-white bottom-0 translate-y-full tran px-3 py-6 pt-12">
      <FinishRide setFinishRidePanel={setFinishRidePanel}  />
      </div>
   </div>
  )
}

export default CaptainRiding
