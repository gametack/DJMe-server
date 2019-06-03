import React, { PureComponent } from "react";
import PSpotify from "../provider/spotify/spotify"
import { Searchbar } from "react-native-paper";
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

export default class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.provider = props.provider

    this.state = {
      dataSource: [],
      search: ""
    };
  }


  providerSearch = async () => {
    query = this.state.search
    try {
      data = await this.provider.search(query, ["track"]);
      this.setState({
        dataSource: data.tracks.items
      })
    }
    catch (error) {
      Alert.alert("Error", error.message);
    }
  }


  itemSelected = item => this.provider.play(item.uri);

  updateSearch = search => this.setState({ search });

  searchSong = () => {
    this.providerSearch();
  }


  renderItem = item => {
    let name = item.name
    let subtext = ""
      let artistname =  item.artists.map(artist => artist.name).join(", ");
      //todo may need to optimize here to get lower resolution image since we're displaying smaller images
      subtext = artistname + " * " + item.album.name
      if(item.album.images.length > 0){
        imgurl = item.album.images[0].url
      }
    return(
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

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          onSubmitEditing = {this.searchSong}
          value={search}
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={item => this.renderItem(item.item)}
          keyExtractor={item => item.id}
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
  },
  playlistItem: {
    marginLeft: 25,
    marginBottom: 25
  },
  playlistItemTitle: {
    fontFamily: "gibson-bold",
    fontSize: 18
  },
  playlistItemMeta: {
    fontFamily: "gibson-regular",
    color: "#b9bdbe",
    fontSize: 15
  },
  loadMessage: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});