import {decorate, observable} from "mobx"
import NowPlaying from "./now-playing"
class ProviderBase {
  constructor() { }
  active = false
  playing = false
  nowPlaying = new NowPlaying()
  initialize = () => { }
  login = () => { }
  logout = () => { }

  play = (data) => { }
  play = () => { }
  queue = (data) => { }
  pause = () => { }
  skipToNext = () => { }
  skipToPrevious = () => { }
  seek = (data) => { }
  toggleShuffle = (data) => { }
  toggleRepeat = (data) => { }
  search = (query, data) => { }

  getMyPlaylists = () => { }
  getPlaylistTracks = (id) => { }
  getPlaylist = (id) => { }

  isinitialized = () => { }
  isLoggedIn = () => { }
  sessionExpired = () => { }
  }
  decorate(ProviderBase, {
    active: observable,
    playing: observable
  })
  
export default ProviderBase