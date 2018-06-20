import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Switch, Icon } from 'antd';


class Device extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
    return <div className="Device">
        <h1> {this.props.name} </h1>
      <Switch checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked={this.props.switchPosition ? true : false} />
        <hr />
      </div>;
  }

  componentDidMount() {
    this.switch = ReactDOM.findDOMNode(this).querySelector(".ant-switch");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('prev: ', prevProps, 'prevState ', prevState, 'snap ', snapshot);
    console.log("prev switch was: ", prevProps.switchPosition);
    console.log('current switch is: ', this.props);
    
    if (prevProps.switchPosition != this.props.switchPosition) {
      this.switch.click();
    }
  }
}

export default Device;