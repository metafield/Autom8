import React, { Component } from "react";
import { Row, Col, Form, Icon, Input, Button, Checkbox, Divider } from "antd";
const FormItem = Form.Item;

class Home extends Component {
  state = {
    loading: false
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false });
          this.props.history.push("/devices");
        }, 1000);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return <React.Fragment>
        <Row>
          <Col className="Login" xs={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }} style={{ padding: "20px" }}>
            <Row>
              <h2>Log in using a 3rd party:</h2>
              <Divider />
            </Row>

            <Row>
              <Col span={8}>
                <Icon type="gitlab" style={{ color: "#e8724c" }} className="ThirdPartyIcon" />
              </Col>
              <Col span={8}>
                <Icon type="twitter" style={{ color: "#2daaeb" }} className="ThirdPartyIcon" />
              </Col>
              <Col span={8} style={{ marginBottom: "15px" }}>
                <Icon type="google" style={{ color: "#d65e54" }} className="ThirdPartyIcon" />
              </Col>
              <Divider />
            </Row>

            <Row>
              <h2>Or sign in with username and Password:</h2>
            </Row>

            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("userName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your username!"
                    }
                  ]
                })(<Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your Password!"
                    }
                  ]
                })(<Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />)}
              </FormItem>
              <FormItem>
                <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button" style={{ marginRight: "5px" }}>
                  Log in
                </Button>
                Or <a href=""> register now!</a>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </React.Fragment>;
  }
}
const WrappedLogin = Form.create()(Home);
export default WrappedLogin;
