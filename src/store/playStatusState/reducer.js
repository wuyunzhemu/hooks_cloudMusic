
const playStatusReducer = (state,action)=>{
  switch(action.type){
    case 'CHANGECURSTATUS':return Object.assign({} , state , {onPlaying:!state.onPlaying});
    default : return state;
  }
}

export default playStatusReducer;