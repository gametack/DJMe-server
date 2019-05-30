import React, { PureComponent } from "react";
import PSpotify from "../provider/spotify/spotify"
import { Searchbar } from "react-native-paper";

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
      display: "playlist"
    };
  }
  provider = new PSpotify()


  async providerSearch(query) {
    try{
      data = await this.provider.search(query, ["track"]);
    }
    catch(error){
      Alert.alert("Error", error);
    }
    this.setState({
      loading: false,
      dataSource: data.tracks.items
    })   
  }


  itemSelected = item => {
      if(this.state.display == "playlist"){
        this.provider.play(item.uri);
      }
      else{
        getPlaylistTracks(item.is)
      }
  }

  getRequests = async () => {
  }

  renderItem = data => (
    <TouchableOpacity
      style={styles.list}
      onPress={() => this.itemSelected(data.item)}
    >
      <View style={styles.playlistItem}>
        <Text style={styles.lightText}>{data.item.name}</Text>
      </View>
    </TouchableOpacity>
  );

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
          renderItem={item => this.renderItem(item)}
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
  }
});