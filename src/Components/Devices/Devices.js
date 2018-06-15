import React from 'react';
import { fireBaseConnect } from "../../Context/FireBase";


const Devices = (props) => {
  if (props.devices) {
    const devices = props.devices;
    
    // console.log("object keys :", Object.keys(devices))
    return (
      <div className="Devices">
        <h1> Devices {
          Object.keys(devices).map( key => <p>{key}: {devices[key]}</p>)
        } </h1>
      </div>
    );
  } else {
    return <p> loading </p>
  }
  
}

export default fireBaseConnect(Devices);