import React from 'react';
import { Switch, Icon } from 'antd';


const Device = (props) => {
  const switchPosition = props.switchPosition ? true : false;
  console.log(switchPosition);
  
  return <div className="Device">
      <h1> {props.name} </h1>
      <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked={switchPosition} />
      <hr />
    </div>;
}

export default Device;