import React from 'react';
import './player.css'
import PlayerNav from '../../components/playerNav'
const Player = (props) => {
   return <div className = 'player'>
      <PlayerNav/>
      <div className = 'body'></div>
      <div className = 'tabbar'></div>
   </div>
};
export default Player;