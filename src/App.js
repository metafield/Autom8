import React, { Component } from 'react';
import { FireBaseProvider } from './Context/FireBase'
import './App.css';
import Devices from "./Components/Devices/Devices";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {

  render() {
    return (
      <div className="App">
        <FireBaseProvider>
          <Devices/>
        </FireBaseProvider>
      </div>
    );
  }
}

export default App;
