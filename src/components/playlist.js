import React, { PureComponent } from "react";
import PSpotify from "../provider/spotify/spotify"
import { List, Avatar } from 'react-native-paper';

import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

export default class PlayList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: [],
      search: "",
      trackview: false
    };
  }
  provider = new PSpotify()
  isTrackView = false

  async providerSearch(query) {
    try {
      data = await this.provider.search(query, ["track"]);
    }
    catch (error) {
      Alert.alert("Error", error);
    }
    this.setState({
      loading: false,
      dataSource: data.tracks.items
    })
  }


  itemSelected = item => {
    if (!this.state.trackview) {
      this.getPlaylistTracks(item.id)
      this.setState({
        tracks: true
      })
      isTrackView = true
    }
    else {
      this.provider.play(item.track.uri);
    }
  }

  getMyPlaylists = async () => {
    try {
      data = await this.provider.getMyPlaylists();
      this.setState({
        dataSource: data.items,
        tracks: false
      })
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }

  }

  getPlaylistTracks = async (id) => {
    try {
      data = await this.provider.getPlaylistTracks(id);
      this.setState({
        dataSource: data.items,
        trackview: true
      })
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }
  }

  renderItem = item => {
    let name = this.state.trackview ? item.track.name : item.name
    let subtext = ""
    if (this.state.trackview) {
      let artistname = item.track.artists.map(artist => artist.name).join(", ");
      //todo may need to optimize here to get lower resolution image since we're displaying smaller images
      subtext = artistname + " * " + item.track.album.name
      if (item.track.album.images.length > 0) {
        imgurl = item.track.album.images[0].url
      }
    }
    else {
      subtext = item.tracks.total.toString() + " tracks"
      if (item.images.length > 0) {
        imgurl = item.images[0].url
      }
    }
    return (
      <TouchableOpacity
        style={styles.list}
        onPress={() => this.itemSelected(item)}
      >
        <List.Item
          //  containerStyle={{ borderBottomColor: 'red' }}
          title={name}
          description={subtext}
          left = { props => ( <Avatar.Image {...props} size={50} source={{ uri: imgurl }} /> )}
        />
      </TouchableOpacity>
    );
  }
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}
      />
    );
  };

  componentDidMount() {
    //TODO utilize sharedpreferences find 
    this.provider = new PSpotify()
    this.getMyPlaylists()
    if (this.state.trackview) {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.goBack(); // works best when the goBack is async
        this.setState({
          trackview: false
        })
        return true;
      });
    }
    else {
      if (this.backHandler) {
        this.backHandler.remove();
      }
    }
  }

  componentWillUnmount() {
    if (this.backHandler) {
      this.backHandler.remove();
    }
  }
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        {/* <Searchbar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          onSubmitEditing = {this.searchSong}
          value={search}
        /> */}
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item.item)}
          keyExtractor={item => this.state.trackview ? item.track.id:item.id}
        />
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
  }
});