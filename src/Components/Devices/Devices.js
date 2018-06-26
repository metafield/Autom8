import React, { Component } from "react";
import Device from "./Device";
import MediaQuery from 'react-responsive'
import { fireBaseConnect } from "../../Context/FireBase";
import { Table } from "antd";

class Devices extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    filterDropdownVisible: false,
    data: {},
    searchText: "",
    filtered: false
  };

  buildTableData(rawData) {
    return Object.keys(rawData).map(key => {
      return {
        key,
        name: rawData[key].name,
        uptime: 60,
        cost: "$2.30"
      };
    });
  }

  render() {
    const { devices } = this.props;
    const { dispatch } = this.props;

    if (devices) {
      this.data = [...this.buildTableData(devices)];
      const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: text => <a href="javascript:;">{text}</a>
        },
        { title: "Uptime", dataIndex: "uptime", key: "uptime" },
        {
          title: "Cost",
          className: "column-money",
          dataIndex: "cost",
          key: "cost"
        },
        {
          title: "Power",
          key: "power",
          render: (text, record) => (
            <span>
              <Device
                key={record.key}
                switchId={record.key}
                switchPosition={devices[record.key].state}
                name={devices[record.key].name}
                dispatch={dispatch}
              />
            </span>
          )
        }
      ];

      const Example = () => (
        <div>
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
        </div>
      );

      return (
        <div className="Devices">
          <React.Fragment>
            <p>{Example()}</p>
            <Table columns={columns} dataSource={this.data} />;
          </React.Fragment>
        </div>
      );
    } else {
      return <p> loading </p>;
    }
  }
}

export default fireBaseConnect(Devices);
