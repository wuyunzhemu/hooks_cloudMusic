import React from 'react';
import './player.css'
import PlayerNav from '../../components/playerNav/playerNav'
import PlayerTab from '../../components/playerTab/playerTab';
import PlayerPannel from '../../components/PlayerPannel/PlayerPannel';
import Provider from '../../store/provider';
const Player = (props) => {
   return window.innerWidth<750?<div className='player'>
      <Provider>
         <PlayerNav />
         <PlayerPannel/>
         <PlayerTab />
      </Provider>
   </div>:'请使用小尺寸设备浏览页面~'
};
export default Player;