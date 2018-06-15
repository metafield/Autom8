import React, { Component } from 'react';
import { FireBaseProvider } from './Context/FireBase'
import logo from './logo.svg';
import './App.css';
import Devices from "./Components/Devices/Devices";
import { Switch } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {
  onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  render() {
    
    return (
      <div className="App">
        <p> -{this.count}- </p>
        <FireBaseProvider>
          <Devices/>
        </FireBaseProvider>
      </div>
    );
  }
}

export default App;
