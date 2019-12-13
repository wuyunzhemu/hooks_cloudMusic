import React,{useContext} from 'react';
import playList from '../../store/playListState/index';
const Pannel = props =>{
  const { state, dispatch } = useContext(playList.playListContext);
  
  return <div>

  </div>
};

export default Pannel;