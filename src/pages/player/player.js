import React from 'react';
import './player.css'
import PlayerNav from '../../components/playerNav/playerNav'
import PlayerTab from '../../components/playerTab/playerTab';
const Player = (props) => {
   return <div className = 'player'>
      <PlayerNav/>
      <div className = 'body'></div>
      <PlayerTab/>
   </div>
};
export default Player;