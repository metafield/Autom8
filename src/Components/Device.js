import React from 'react';
import { Switch, Icon } from 'antd';

class Device extends React.Component {

  render() {
    return (
      <div className="Device">
        <h1> A Device </h1>
          <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} />
        <hr/>
      </div>
    );
  }
}

export default Device;