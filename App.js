import Amplify from "aws-amplify";
import React from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsConfig from "./aws-exports";
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from "./src/components/home";
import JoinRoom from './src/components/join-room'
import CreateRoom from './src/components/create-room'
import Room from './src/components/room'
import Player from './src/components/player'
import DataStore from './src/store/domain/DataStore'
import PSpotify from "./src/provider/spotify/spotify"

Amplify.configure(awsConfig);

const DataState = new DataStore()
const provider = new PSpotify();

class App extends React.Component {
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
                    <Route
                        exact
                        path="/room"
                        render={(props) => <Room {...props} provider={provider}/>}
                    />
                    <Route
                        exact
                        path="/player"
                        render={(props) => <Player {...props} provider={provider}/>}
                    />
                </Switch>
            </NativeRouter>
        );
    }
}

// export default withAuthenticator(App)
export default App;