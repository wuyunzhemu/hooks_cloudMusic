import React,{useReducer} from 'react';
import playListReducer from './reducer';
import { initPlayList } from '../initialState';

const playListContext = React.createContext();
//播放列表相关状态provider
const provider = props =>{ 
  const [state,dispatch] = useReducer(playListReducer,initPlayList);
  return (
    <playListContext.Provider value={{state,dispatch}}>
      {props.children}
    </playListContext.Provider>
  )
}

export default {playListContext,provider};