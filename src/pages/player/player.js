import React from 'react';
import './player.css'
import PlayerNav from '../../components/playerNav/playerNav'
import PlayerTab from '../../components/playerTab/playerTab';
import PlayerPannel from '../../components/PlayerPannel/PlayerPannel';
import Provider from '../../store/provider';
const Player = (props) => {
   return <div className='player'>
      <Provider>
         <PlayerNav />
         <PlayerPannel/>
         <PlayerTab />
      </Provider>
   </div>
};
export default Player;