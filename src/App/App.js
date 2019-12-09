import React from 'react';

import SignIn from '../SignIn';
import Feedback from '../Feedback';

import './App.css';

class App extends React.Component {

  state = {
    loggedIn: false,
    failedLogIn: false
  }

  validate({ username, password }) {
    if (username === 'l.jenkins' && password === 'hunter2') {
      this.setState({ loggedIn: true })
    } else {
      this.setState({ failedLogIn: true })
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.loggedIn 
          ? <Feedback />
          : <SignIn validate={this.validate.bind(this)} failedLogIn={this.state.failedLogIn} />
        }
      </div>
    );
  }
}

export default App;
