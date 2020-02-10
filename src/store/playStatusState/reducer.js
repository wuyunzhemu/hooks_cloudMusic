
const playStatusReducer = (state,action)=>{
  switch(action.type){
    case 'CHANGECURSTATUS':return Object.assign({} , state , {onPlaying:!state.onPlaying});
    case 'SETPLAYTIME':return Object.assign({} , state , {curTime:action.payload || 0});
    default : return state;
  }
}

export default playStatusReducer;