import React from 'react';
import { Switch, Icon } from 'antd';
import { fireBaseConnect } from "./Context/FireBase";


const Device = (props) => {
  return (
    <div className="Device">
      <h1> A Device { props.count } </h1>
        <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
      <hr/>
    </div>
  );
}

export default fireBaseConnect(Device);