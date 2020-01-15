import React,{useContext} from 'react';
import playList from '../../store/playListState/index';
import './PlayerPannel.css'
const Pannel = props =>{
  const { state, dispatch } = useContext(playList.playListContext);
  const curSong = state.songsList[state.curSongIndex];
  return <div className="pannel">
      <img src={curSong.album.pic} className="album-pic"></img>
  </div>
};

export default Pannel;