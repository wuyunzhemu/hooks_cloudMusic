import React,{useContext} from 'react';
import playList from '../../store/playListState/index';
import playStatus from '../../store/playStatusState/index';
import './PlayerPannel.css'
const Pannel = props =>{
  const {state:statusState,dispatch:statusDispatch } = useContext(playStatus.playStatusContext)
  const {state:listState,dispatch:listDispatch} = useContext(playList.playListContext);
  const curSong = listState.songsList[listState.curSongIndex];
  const onPlaying = statusState.onPlaying; // 当前播放状态:boolean
  return <div className="pannel">
      <img src={curSong.album.pic} className="album-pic" style={{animationPlayState:onPlaying?'running':'paused'}}></img>
  </div>
};

export default Pannel;