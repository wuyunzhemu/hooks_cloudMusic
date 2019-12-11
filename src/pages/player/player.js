import React from 'react';
import './player.css'
import PlayerNav from '../../components/playerNav/playerNav'
import PlayerTab from '../../components/playerTab/playerTab';
import Provider from '../../store/provider';
const Player = (props) => {
   return <div className='player'>
      <Provider>
         <PlayerNav />
         <div className='body'></div>
         <PlayerTab />
      </Provider>
   </div>
};
export default Player;