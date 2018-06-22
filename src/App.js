import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FireBaseProvider } from "./Context/FireBase";
import { Layout, Breadcrumb, Icon } from "antd";
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
                {/* TODO: make a <Bread> component to update crumbs */}
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ padding: "0 50px" }}>
                  <div
                    style={{ background: "#fff", padding: 24, minHeight: 280 }}
                  >
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
