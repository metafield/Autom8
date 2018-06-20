import React from 'react';
import Device from './Device'
import { Switch, Icon } from 'antd';
import { fireBaseConnect } from "../../Context/FireBase";


const Devices = (props) => {
  if (props.devices) {
    const { devices } = props;
    
    // console.log("object keys :", Object.keys(devices))
    return <div className="Devices">
        <h1>
          {" "}
          Devices{" "}
          {Object.keys(devices).map(key => (
            <Device
              key={key}
              switchPosition={devices[key].state}
              name={devices[key].name}
            />
          ))}{" "}
        </h1>
      </div>;
  } else {
    return <p> loading </p>
  }
  
}

export default fireBaseConnect(Devices);