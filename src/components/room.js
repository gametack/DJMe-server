import React, { Component } from "react";
import { BottomNavigation, Text, TouchableRipple } from 'react-native-paper';
import Search from './search'
import Playlist from './playlist'
import Requests from './requests'
import PSpotify from "../provider/spotify/spotify"
import { observer } from 'mobx-react';
import { List, Avatar, IconButton } from 'react-native-paper';


import {
  StyleSheet,
  View,
} from "react-native";

class Room extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    providerInitialized: false,
    loggedIn: false,
    index: 0,
    routes: [
      { key: 'playlist', title: 'Playlist', icon: 'people' },
      { key: 'requests', title: 'Requests', icon: 'people' },
      { key: 'search', title: 'Search', icon: 'search' },
    ],
  };
  provider = new PSpotify();

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    playlist: Playlist,
    requests: Requests,
    search: Search,
  });

  async initializeIfNeeded() {
    if (!(await this.provider.isinitialized())) {
      await this.provider.initialize()
    }

    this.setState({
      providerInitialized: true
    });

    // handle logged in
    //todo add refresh code posibility
    if (await this.provider.isLoggedIn()) {
      if (await this.provider.sessionExpired()) {
        await this.provider.logout();
        this.login();
      } else {
        this.setState({
          loggedIn: true
        });
      }
    }
    else {
      this.login();
    }
  }

  async login() {
    // log into provider
    const loggedin = await this.provider.login();
    this.setState({
      loggedin: loggedin
    });
  }

  componentDidMount() {
    //TODO utilize sharedpreferences find 

    this.initializeIfNeeded();
  }

  render() {
    if (!this.state.providerInitialized || !this.state.loggedIn) {
      return (
        <View style={styles.container}>
        </View>
      );
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />
        {this.provider.active &&
          <List.Item
            // containerStyle={{ borderBottomColor: 'red' }}
            title={this.provider.nowPlaying.Title}
            description={this.provider.nowPlaying.SubTitle}
            left={props => (<Avatar.Image {...props} size={50} source={{ uri: this.provider.nowPlaying.ImgUrl }} />)}
            right={props => <IconButton {...props} icon={this.provider.playing ? "pause" : "play-arrow"} onPress={() => this.provider.playing ? this.provider.pause() : this.provider.play()}
            />}
            onPress= {() => history.push('/player')}
          />
        }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
  },

  providerLoginButton: {
    justifyContent: "center",
    borderRadius: 18,
    backgroundColor: "green",
    overflow: "hidden",
    width: 200,
    height: 40,
    margin: 20
  },
  providerLoginButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: "white"
  },
  greeting: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
export default observer(Room)