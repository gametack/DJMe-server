import Spotify from "rn-spotify-sdk";
import spotifyConfig from "./spotify-config";
import ProviderBase from "../provider-base"

export default class PSpotify extends ProviderBase {
  constructor() {
    super();
    Spotify.addListener('login', this.loginHandler)
    Spotify.addListener('logout', this.logoutHandler)
    // Spotify.addListener('active', this.activeHandler)
  }

  loginHandler = (data) => {
    console.log("logged in")
    // Spotify.addListener('metadataChange', this.metadataHandler)
    Spotify.addListener('play', this.playHandler)
    Spotify.addListener('pause', this.pauseHandler)
    Spotify.addListener('trackChange', this.trackChangeHandler)
  }

  logoutHandler = (data) => {
    console.log("logged in")
    Spotify.removeListener('play', this.playHandler)
    Spotify.removeListener('pause', this.pauseHandler)
    Spotify.removeListener('trackChange', this.trackChangeHandler)
  }
  
  activeHandler = (data) => {
    this.active = data
  }

  playHandler = (data) => {
    console.log("played")
    this.playing = true
    if (!data.error && data.metadata.currentTrack) {
      const track = data.metadata.currentTrack
      this.playing = data.state.playing
      this.active = true
      this.nowPlaying.Title = track.name
      this.nowPlaying.SubTitle = track.artistName + " * " + track.albumName
      this.nowPlaying.ImgUrl = track.albumCoverArtURL
    }
    else {
      console.log(data)
    }
  }
  pauseHandler = (data) => {
    console.log("pause")
    this.playing = false
  }
  metadataHandler = (data) => {
    if (!data.error && data.metadata.currentTrack) {
      const track = data.metadata.currentTrack
      this.playing = data.state.playing
      this.nowPlaying.Title = track.name
      this.nowPlaying.SubTitle = track.artistName + " * " + track.albumName
      this.nowPlaying.ImgUrl = track.albumCoverArtURL
    }
    else {
      console.log(data)
    }
  }
  trackChangeHandler = (data) => {
    if (!data.error && data.metadata.currentTrack) {
      const track = data.metadata.currentTrack
      this.playing = data.state.playing
      this.nowPlaying.Title = track.name
      this.nowPlaying.SubTitle = track.artistName + " * " + track.albumName
      this.nowPlaying.ImgUrl = track.albumCoverArtURL
    }
    else {
      console.log(data)
    }
  }

  initialize = () => Spotify.initialize(spotifyConfig)
  login = () => Spotify.login();
  logout = () => Spotify.logout();

  play = (uri, index, pos) => {
    if (uri) {
      Spotify.playURI(uri, index, pos)
    }
    else {
      Spotify.setPlaying(true)
    }
  }
  queue = (uri) => Spotify.queueURI(uri)
  pause = () => Spotify.setPlaying(false)
  skipToNext = () => Spotify.skipToNext()
  skipToPrevious = () => Spotify.skipToPrevious()
  seek = (data) => { }
  toggleShuffle = (data) => { }
  toggleRepeat = (data) => { }
  search = (query, data) => Spotify.search(query, ["track"]);

  getMyPlaylists = () => Spotify.getMyPlaylists();
  getPlaylistTracks = (id) => Spotify.getPlaylistTracks(id);
  getPlaylist = (id) => Spotify.getPlaylist(id);

  isinitialized = () => Spotify.isInitializedAsync();
  isLoggedIn = () => Spotify.isLoggedInAsync();
  sessionExpired = async () => {
    const session = await Spotify.getSessionAsync();
    return new Date().getTime() > session.expireTime;
  }
}
