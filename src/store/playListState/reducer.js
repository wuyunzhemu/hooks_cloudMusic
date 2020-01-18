
const playListReducer = (state,action) => {
  switch(action.type){
    case 'PLAYNEXT':
      //如果当前为最后一首 则播放第一首
      if(state.curSongIndex <state.songsList.length - 1){
        console.log('change next song')
        return Object.assign({} , state , {curSongIndex:state.curSongIndex + 1});
      }
      else
        return Object.assign({} , state,{curSongIndex:0});
    case 'PLAYPRE':
      // 如果当前为第一首，则播放最后一首
      if(state.curSongIndex < 1){
        return Object.assign({} , state , {curSongIndex:state.songsList.length - 1});
      }
      else
        return Object.assign({},state, {curSongIndex:state.curSongIndex - 1});
    default:return state;
  }
}


export default playListReducer;