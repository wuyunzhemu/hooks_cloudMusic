import React,{useReducer} from 'react';
import playStatusReducer from './reducer';
import {initPlayStatus} from '../initialState'
const playStatusContext = React.createContext();

const provider = props =>{
  const [state,dispatch] = useReducer(playStatusReducer,initPlayStatus);
  return <playStatusContext.Provider value={{state,dispatch}}>
    {props.children}
  </playStatusContext.Provider>
}

export default {provider,playStatusContext}