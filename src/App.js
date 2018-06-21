import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FireBaseProvider } from './Context/FireBase'
import Devices from "./Components/Devices/Devices";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import './App.css';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

class App extends Component {

  render() {
    return <div className="App">
        <FireBaseProvider>
          <Router>
            <div>
              <Nav />
              <Route exact path="/" component={Home} />
              <Route exact path="/devices" component={Devices} />
              <Route exact path="/signin" component={SignIn} />
            </div>
          </Router>
        </FireBaseProvider>
      </div>;
  }
}

export default App;
