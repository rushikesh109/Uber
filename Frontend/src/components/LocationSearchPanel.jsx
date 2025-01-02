import React from 'react'

const LocationSearchPanel = (props) => {
console.log(props);

    // sample array for location search
    const locations = [
        "312B, Near Gulmohar Primerose, Happy Living Hostel, Pune",
        "300D, Near JSPMs College, Happy Living Hostel, Pune",
        "31C, Near Ivy Estate, Happy Living Hostel, Pune",
        "12F, Near Bus Stand, Happy Living Hostel, Pune",
    ]
  return (
    <div>
      {/* This is just sample data */}

      {
        locations.map(function(elem, index){
            return <div key={index} onClick={()=>{
                props.setVehiclePanel(true)
                props.setPanelOpen(false)
            }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill'></i></h2>
    <h4 className='font-medium'>{elem}</h4> 
          </div>
        })
      }
    </div>
  )
}

export default LocationSearchPanel
