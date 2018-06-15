import React from "react";

const { Provider, Consumer } = React.createContext({});

export class FireBaseProvider extends React.Component {
  state = {
    count: 42
  };

  dispatch = vals => {
    this.setState(vals);
  };

  render() {
    return (
      <Provider value={{ ...this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const fireBaseConnect = Component =>
  class extends React.Component {
    render() {
      return (
        <Consumer>
          {context => {
            console.log(this.props);
            
            debugger
            const newProps = Object.assign({}, context, this.props);
            return <Component {...newProps} />;
          }}
        </Consumer>
      );
    }
  };
