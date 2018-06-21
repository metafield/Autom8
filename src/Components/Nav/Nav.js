import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click", e);
    this.setState({ current: e.key });
  };

  render() {
    return <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
        {/* <SubMenu title={<span>
              <Icon type="setting" />Navigation Three - Submenu
            </span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu> */}
      </Menu>;
  }
}

export default Nav;
