
function playListReducer(state,action){
  switch(action.type){
    case 'PLAYNEXT':
      
      if(state.curSongIndex <state.songsList.length - 1){
        console.log('change next song')
        return Object.assign({} , state , {curSongIndex:state.curSongIndex + 1});
      }
      else
        return Object.assign({} , state,{curSongIndex:0});
    default:return state;
  }
}


export default playListReducer;