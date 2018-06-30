import React from "react";
import { Card, Button } from "antd";

export default class LoadingCard extends React.Component {
  state = {
    loading: true
  };

  handleClick = () => {
    this.setState({ loading: !this.state.loading });
  };

  render() {
    return (
      <div>
        <Card
          loading={this.state.loading}
          title={this.props.title || "Loading!"}
        >
          Whatever content
        </Card>
        <Button onClick={this.handleClick} style={{ marginTop: 16 }}>
          Toggle loading
        </Button>
      </div>
    );
  }
}
