import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FireBaseProvider } from "./Context/FireBase";
import { Layout, Icon } from "antd";
import MediaQuery from 'react-responsive'
import Devices from "./Components/Devices/Devices";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const { Header, Content, Footer } = Layout;

class App extends Component {
  footerStyle = {
    position: "absolutse",
    bottom: 0,
    width: "100%",
    height: "60px",
    textAlign: "center"
  };

  Example() {
    return (<div>
      <div>Device Test!</div>
      <MediaQuery query="(min-device-width: 1224px)">
        <div>You are a desktop or laptop</div>
        <MediaQuery query="(min-device-width: 1824px)">
          <div>You also have a huge screen</div>
        </MediaQuery>
        <MediaQuery query="(max-width: 1224px)">
          <div>You are sized like a tablet or mobile phone though</div>
        </MediaQuery>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <div>You are a tablet or mobile phone</div>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <div>You are portrait</div>
      </MediaQuery>
      <MediaQuery query="(orientation: landscape)">
        <div>You are landscape</div>
      </MediaQuery>
      <MediaQuery query="(min-resolution: 2dppx)">
        <div>You are retina</div>
      </MediaQuery>
    </div>);
  }

  render() {
    return (
      <div className="App">
        <FireBaseProvider>
          <Router>
            <div className="router">
              <Layout className="" style={{ height: "100vh" }}>
                <Header style={{ background: "#f0f2f5", margin: "20px 0px" }}>
                  <Nav />
                </Header>
                <Content style={{ padding: "0 50px" }}>
                  <div
                    style={{ background: "#fff", padding: 24, minHeight: 280 }}
                  >
                    <p>{this.Example()}</p>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/devices" component={Devices} />
                    <Route exact path="/signin" component={SignIn} />
                  </div>
                </Content>

                <Footer>
                  Autom8 ©2018 Created by <Icon type="github" />{" "}
                  <a href="www.github.com/metafield">metafield</a>
                </Footer>
              </Layout>
            </div>
          </Router>
        </FireBaseProvider>
      </div>
    );
  }
}

export default App;
