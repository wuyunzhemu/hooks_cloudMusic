import React,{useReducer} from 'react';
import playListReducer from './reducer';
import initPlayListState from '../mockdata/musicList';

const playListContext = React.createContext();
//播放列表相关状态provider
const provider = props =>{ 
  const [state,dispatch] = useReducer(playListReducer,initPlayListState);
  return (
    <playListContext.Provider value={{state,dispatch}}>
      {props.children}
    </playListContext.Provider>
  )
}

export default {playListContext,provider};