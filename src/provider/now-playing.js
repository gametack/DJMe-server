import { decorate, observable } from "mobx"
class NowPlaying {
    Title = ""
    Subtitle = ""
    ImgUrl = ""
}
decorate(NowPlaying, {
    Title: observable,
    Subtitle: observable,
    ImgUrl: observable
})
export default NowPlaying
