
export const playStatusReducer = (state,action)=>{
  switch(action.type){
    case 'CHANGECURSTATUS':return Object.assign({} , state , {initPlayStatus:!initPlayStatus}); break;
    default : return state;
  }
}

export default {playStatusReducer};