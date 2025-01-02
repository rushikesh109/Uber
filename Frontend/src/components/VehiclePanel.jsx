import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold md-5">Choose a Vehicle</h3>
      <div onClick={() => {
        props.setConfirmRidePanel(true);
      }}
      className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        ></img>
        <div className=" w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div onClick={() => {
        props.setConfirmRidePanel(true);
      }}
        className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        ></img>
        <div className=" w-1/2">
          <h4 className="font-medium text-lg  ml-2">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill">1</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm  ml-2">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600  ml-2">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65.17</h2>
      </div>
      <div onClick={() => {
        props.setConfirmRidePanel(true);
      }} className="flex border-2 mb-2 active:border-black rounded-xl w-full p-3 items-center justify-between">
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        ></img>
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ml-3">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill">3</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm  ml-3">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600  ml-3">
            Affordable Auto rides-
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
