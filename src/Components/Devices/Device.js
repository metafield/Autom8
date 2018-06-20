import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { Switch, Icon } from 'antd';


class Device extends Component {

  
  constructor (props) {
    super(props)
    this.dispatch = props.dispatch;
    this.switchId = props.switchId;
    // TODO: this is a hack to prevent a state change loop (fix it)
    this.updatedViaSimulatedClick = false;
    
  }

  switchChangedHandler(checked) {
    console.log(`switch ${checked ? 'is' : 'not'} checked`);
    console.log(this);
    
    // only dispatch to firebase if it was a user click and not
    // a state correct via simulated click
    if (this.updatedViaSimulatedClick) {
      this.updatedViaSimulatedClick = false;
    } else {
      this.dispatch(this.switchId, checked)
    }
  }

  render() {
    return <div className="Device">
      <h1> {this.props.name} </h1>
        <Switch onChange={(checked) => this.switchChangedHandler(checked)} checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="cross" />} defaultChecked={this.props.switchPosition ? true : false} />
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
    
    // if (prevProps.switchPosition !== this.props.switchPosition) {
    //   this.switch.click();
    //   this.updatedViaSimulatedClick = true;
    // }
  }
}

export default Device;