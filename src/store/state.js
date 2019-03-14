import {playMode} from 'common/js/config'
const state = {
  singer: {}, // 歌手
  palying: false, // 是否正在播放
  fullScreen: false, // 是否全屏
  playList: [], // 播放列表
  sequenceList: [], // 歌曲顺序列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前歌曲索引
}

export default state