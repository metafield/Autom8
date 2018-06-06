import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Device from "./Components/Device";
import { Switch } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {
  onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  render() {
    return (
      <div className="App">
        <Device />
      </div>
    );
  }
}

export default App;
