import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [RidePopUpPanel, setRidePopUpPanel] = useState(true);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const RidePopUpPanelRef = useRef(null);
  const ConfirmRidePopUpPanelRef = useRef(null);

  
  React.useEffect(() => {
    if (RidePopUpPanel) {
      gsap.to(RidePopUpPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
      });
    } else {
      gsap.to(RidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
      });
    }
  }, [RidePopUpPanel]);

  React.useEffect(() => {
    if (ConfirmRidePopUpPanel) {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
      });
    } else {
      gsap.to(ConfirmRidePopUpPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
      });
    }
  }, [ConfirmRidePopUpPanel]);

  return (
    <div className='h-screen'>
   <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
    <img  className="w-16 " src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
    <Link to='/captainHome' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
      <i className='text-lg font-medium ri-logout-box-r-line'></i>
    </Link> 
    </div>  
    <div className='h-3/5'>
    <img className='h-full w-full object-cover' src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' alt='uber-location' />
    </div>
    <div className='h-2/5 p-6'>
    <CaptainDetails />
    </div>
    <div
       ref={RidePopUpPanelRef}
    className="fixed w-full z-10 bg-white bottom-0 translate-y-full tran px-3 py-6 pt-12">
      <RidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
      <div
       ref={ConfirmRidePopUpPanelRef}
    className="fixed w-full z-10 bg-white bottom-0 translate-y-full tran px-3 py-6 h-screen pt-12">
      <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>

   </div>
  )
}

export default CaptainHome
