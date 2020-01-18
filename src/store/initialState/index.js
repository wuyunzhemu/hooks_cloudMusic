// 初始播放列表
export const initPlayList = {
  curSongIndex:0,
  songsList: [
    {
      id:483378335,
      name:"梦",
      singer:"deca joins",
      duration:245146,
      album:{
        name:"浴室",
        pic:"https://p2.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg"
      }
    },
    {
      id: 26494698,
      name: "米店",
      singer: "张玮玮和郭龙",
      duration: 336000,
      album: {
        name: "白银饭店",
        pic: "https://p2.music.126.net/tpjQ54ARw1iE8u9YPvj8gw==/2255098348619552.jpg"
      }
    },
    {
      id: 483242432,
      name: "一去不回来",
      singer: "deca joins",
      duration: 286213,
      album:{
        name:"浴室",
        pic:"https://p2.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg"
      }
    }
  ]
}

// 初始播放状态
export const initPlayStatus = {
  onPlaying:false,
  curTime:0,
}
export default {initPlayList,initPlayStatus};