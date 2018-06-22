import React, { Component } from "react";
import Device from "./Device";
import { fireBaseConnect } from "../../Context/FireBase";
import { Table, Divider, Icon } from "antd";

class Devices extends Component {

  
  constructor(props) {
    super(props)
    console.log(props);

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

  componentWillUpdate(p, nex) {
    console.log(this.props);
    
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

      return (
        <div className="Devices">
          <React.Fragment>
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
