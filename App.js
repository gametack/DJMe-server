import Amplify from "aws-amplify";
import React from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsConfig from "./aws-exports";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./components/home";
import JoinRoom from './components/join-room'
import CreateRoom from './components/create-room'

Amplify.configure(awsConfig);

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/joinRoom" component={JoinRoom}/>
            <Route exact path="/createRoom" component={CreateRoom}/>
          </Switch>
      </NativeRouter>
    );
  }
}

// export default App;
export default withAuthenticator(App);