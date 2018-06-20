import React from 'react';
import firebase from 'firebase';

const { Provider, Consumer } = React.createContext({});

var config = {
  apiKey: "AIzaSyCK0wlYbBdeYHUih6NbPv67Yh7owgxrMGQ",
  authDomain: "autom8-8.firebaseapp.com",
  databaseURL: "https://autom8-8.firebaseio.com",
  projectId: "autom8-8",
  storageBucket: "autom8-8.appspot.com",
  messagingSenderId: "387177266439"
};
firebase.initializeApp(config);


export class FireBaseProvider extends React.Component {
  state = {
    count: 42
  };

  dispatch = (switchId, switchPosition) => {
    // this.setState(vals);

    const updates = {
      switchId
    }
    
    // TODO: ref should be a constant that reflects what user is signed in
    firebase.database().ref(`/users/admin/switches/${switchId}`).update({'state': switchPosition}, function (error) {
      if (error) {
        // The write failed...
        console.log('oh no');

      } else {
        // Data saved successfully!

      }
    });
  };

  componentDidMount() {
    // TODO Handle users here. Admin for now.
    const starCountRef = firebase.database().ref('users/admin/switches/');
    starCountRef.on('value', (snapshot) => {
      this.setState({devices: {...snapshot.val()}});
    });
  }

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
            const newProps = Object.assign({}, context, this.props);
            return <Component {...newProps} />;
          }}
        </Consumer>
      );
    }
  };
