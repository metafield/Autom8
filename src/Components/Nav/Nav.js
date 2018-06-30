import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

class Nav extends Component {
  state = {
    current: "home"
  };

  constructor(props) {
    super(props);

    const splitUrl = window.location.href.split("/");
    const endpoint = splitUrl[splitUrl.length - 1];
    if (endpoint) this.state = { current: endpoint };
  }

  render() {
    return (
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[this.state.current]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home">
          <Link to={`/`}>
            <Icon type="wifi" />Autom8
          </Link>
        </Menu.Item>
        <Menu.Item key="devices">
          <Link to={`/devices`}>
            <Icon type="usb" />My Devices
          </Link>
        </Menu.Item>
        <Menu.Item key="signIn">
          <Link to={`/signIn`}>
            <Icon type="user" />Sign In
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
