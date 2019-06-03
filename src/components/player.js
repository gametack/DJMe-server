import React, { Component } from 'react';

import { Text} from 'react-native-paper';

import { StyleSheet, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { observer } from 'mobx-react';

const window = Dimensions.get('window');
class Player extends Component {
  constructor(props) {
    super(props);
    this.provider = props.provider
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{'Room Player'}</Text>
        </View>
        <View style={styles.headerClose}>
          <Icon style={styles.headerClose} name="arrow-drop-down" size={15} onPress={() => this.props.history.goBack()}/>
        </View>
        <Image
          style={{ width: window.width - 30, height: 300 }}
          source={{
            uri: this.provider.nowPlaying.ImgUrl,
          }}
        />
        <Text style={ styles.songTitle }>
          {this.provider.nowPlaying.Title}
        </Text>
        <Text style={ styles.albumTitle }>
          { this.provider.nowPlaying.SubTitle }
        </Text>
        <View style={styles.controls}>
          <View style={styles.back}>
            <Icon name='skip-previous' size={25} 
            onPress={() => this.provider.skipToPrevious()}/>
          </View>
          <View style={styles.play}>
            <Icon name={this.provider.playing ?'pause':'play-arrow'} onPress={() => this.provider.playing ? this.provider.pause() : this.provider.play()}
            size={70} />
          </View>
          <View style={styles.forward}>
            <Icon name='skip-next' onPress={() => this.provider.skipToNext()}
            size={25}/>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#000',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    fontFamily: 'Helvetica Neue',
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19,
  },
  albumTitle: {
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
});
export default observer(Player);
