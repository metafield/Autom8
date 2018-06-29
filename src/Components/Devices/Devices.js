import React, { Component } from "react";
import Device from "./Device";
import { fireBaseConnect } from "../../Context/FireBase";
import { Table } from "antd";
import MediaQuery from "react-responsive";
import TimeSince from "../../Helpers/time-since";

class Devices extends Component {
  state = {
    filterDropdownVisible: false,
    data: {},
    searchText: "",
    filtered: false
  };

  upTimeOffset = null;
  componentDidMount() {
    this.upTimeOffset = setInterval(() => this.forceUpdate(), 1000);
  }

  calcUptime(device) {
    if (device.activatedAt === 0) {
      return "Inactive";
    } else {
      return TimeSince.timeSince(device.activatedAt);
    }
  }

  calcCost(device) {
    if (device.activatedAt === 0) return 0;

    const rate = 10.65;
    const activatedAt = new Date(device.activatedAt);
    const cost = Number.parseFloat(
      rate * TimeSince.getHours(TimeSince.diffMs(activatedAt))
    ).toPrecision(3);

    if (device.state) {
      return cost;
    } else {
      return 0;
    }
  }

  buildTableData(devices) {
    return Object.keys(devices).map(key => {
      return {
        key,
        name: devices[key].name,
        uptime: this.calcUptime(devices[key]),
        cost: "$" + this.calcCost(devices[key])
      };
    });
  }

  render() {
    const { devices } = this.props;
    const { dispatch } = this.props;

    if (devices) {
      this.data = [...this.buildTableData(devices)];
      const colsSmall = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: text => <a href="">{text}</a>
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
      const columns = [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: text => <a href="">{text}</a>
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

      return (
        <div className="Devices">
          <React.Fragment>
            <MediaQuery query="(max-width: 576px)">
              <Table columns={colsSmall} dataSource={this.data} />;
            </MediaQuery>
            <MediaQuery query="(min-width: 576px)">
              <Table columns={columns} dataSource={this.data} />;
            </MediaQuery>
          </React.Fragment>
        </div>
      );
    } else {
      return <p> loading </p>;
    }
  }
}

export default fireBaseConnect(Devices);
