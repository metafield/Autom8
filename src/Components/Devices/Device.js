import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Switch, Icon } from 'antd';


class Device extends Component {

  
  constructor (props) {
    super(props)
    this.dispatch = props.dispatch;
    this.switchId = props.switchId;
    this.uiSwitchPosition = null
  }

  switchChangedHandler(checked) {
    this.uiSwitchPosition = checked;
    this.dispatch(this.switchId, checked)
  }

  render() {
    return <div className="Device">
      <h1> {this.props.name} </h1>
        <Switch onChange={(checked) => this.switchChangedHandler(checked)} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked={this.props.switchPosition ? true : false} />
        <hr />
      </div>;
  }

  componentDidMount() {
    // get the switch node in the dom
    this.switch = ReactDOM.findDOMNode(this).querySelector(".ant-switch");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('prev: ', prevProps, 'prevState ', prevState, 'snap ', snapshot);
    // console.log("prev switch was: ", prevProps.switchPosition);
    // console.log('current switch is: ', this.props);
    
    if (prevProps.switchPosition !== this.props.switchPosition) {
      this.updatedViaSimulatedClick = true;
      if (this.props.switchPosition !== this.uiSwitchPosition) {
        this.switch.click();
      }
      
    }
  }
}

export default Device;