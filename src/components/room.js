import React, { Component } from "react";
import Search from './search'
import Playlist from './playlist'
import Requests from './requests'
import { observer } from 'mobx-react';
import { BottomNavigation, List, Avatar, IconButton } from 'react-native-paper';


import {
  StyleSheet,
  View,
  BackHandler,
} from "react-native";

class Room extends Component {
  constructor(props) {
    super(props);
    this.provider = props.provider
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

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    playlist: props => <Playlist {...props} provider={this.provider} />,
    requests: Requests,
    search: props => <Search {...props} provider={this.provider} />
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

  onGoBack = () =>{
      this.props.history.goBack(); 
    return true;
  }

  componentDidMount() {
    //TODO utilize sharedpreferences find 

    this.initializeIfNeeded();
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.onGoBack);
  }

  componentWillUnmount() {
    if (this.backHandler) {
      this.backHandler.remove();
    }
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
            onPress= {
              () => this.props.history.push('/player')
            }
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