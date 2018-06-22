import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";

class Nav extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click", e);
    this.setState({ current: e.key });
  };

  render() {
    return (
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home">
          <Link to={`/`}>
            <Icon type="home" />Home
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

    // <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
    // <Menu.Item key="home">
    //   <Link to={`/`}>
    //     <Icon type="home" />Home
    //   </Link>
    // </Menu.Item>
    // <Menu.Item key="devices">
    //   <Link to={`/devices`}>
    //     <Icon type="usb" />My Devices
    //   </Link>
    // </Menu.Item>
    // <Menu.Item key="signIn">
    //   <Link to={`/signIn`}>
    //     <Icon type="user" />Sign In
    //   </Link>
    // </Menu.Item>

    //   </Menu>;
  }
}

export default Nav;
