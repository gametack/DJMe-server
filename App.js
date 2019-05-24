import Amplify from "aws-amplify";
import React from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsConfig from "./aws-exports";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./src/components/home";
import JoinRoom from './src/components/join-room'
import CreateRoom from './src/components/create-room'
import DataStore from './src/store/domain/DataStore'
import { observer } from "mobx-react";


Amplify.configure(awsConfig);

const DataState = new DataStore()

@observer class App extends React.Component {
    render() {
        return (
            <NativeRouter>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <Home {...props} />}
                    />
                    <Route
                        exact
                        path="/joinRoom"
                        render={(props) => <JoinRoom {...props} currentRooms={DataState.rooms} />}
                    />
                    <Route
                        exact
                        path="/createRoom"
                        render={(props) => <CreateRoom {...props} currentRooms={DataState.rooms} addRoom={DataState.addRoom} />}
                    />
                </Switch>
            </NativeRouter>
        );
    }
}

// export default withAuthenticator(App)
export default App;