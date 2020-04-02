import React, { useState, createRef,useContext, useEffect } from 'react';
import './playerTab.css'
import playList from '../../store/playListState/index';
import playStatus from '../../store/playStatusState/index';
import ProgressBar from './progressBar';
const musicPlayer = createRef();
const PlayerTab = (props) => {
  const {state:statusState,dispatch:statusDispatch } = useContext(playStatus.playStatusContext)
  const {state:listState,dispatch:listDispatch} = useContext(playList.playListContext);
  const curSong = listState.songsList[listState.curSongIndex]; // 当前歌曲obj
  const onPlaying = statusState.onPlaying; // 当前播放状态:boolean
  useEffect(()=>{
    if (musicPlayer.current) {
      const player = musicPlayer.current; //播放器dom
      if (onPlaying) {
        console.log(player.readyState)
        while(player.readyState !== 4){
          // showLoading
          console.log('cant play')
        }
        player.play();
      }
      else {
        player.pause();
      }
      console.log('暂停：' + player.paused);
    }
  },[onPlaying]);
  // console.log(state);
  // 获取播放器dom


  //切换当前播放歌曲 上一曲/下一曲
  const changeCurSong = (action)=>{
    listDispatch({type:'PLAY'+action})
  }

  //获取当前播放时间
  const getCurrentTime = () =>{
    if (musicPlayer.current) {
      const player = musicPlayer.current; //播放器dom
      return player.currentTime;
    }
    return 0;
  } 

  //设置当前播放时间
  const setCurrentTime = (time) =>{
    if (musicPlayer.current) {
      const player = musicPlayer.current; //播放器dom
      player.currentTime = time;
    }
  }

  return <div className='playerTab'>
    <audio ref={musicPlayer} autoPlay={onPlaying} src={`https://music.163.com/song/media/outer/url?id=${curSong.id}.mp3`} />
    <ProgressBar setPlayTime={setCurrentTime} onPlaying={onPlaying} changeCurSong={changeCurSong} duration={curSong.duration} curSongIndex={listState.curSongIndex} getPlayTime={getCurrentTime}/>
    <div className='player-button'>
      <svg t="1574175081645" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6830" width=".40rem" height=".40rem"><path d="M84.21 273.16h59.57c86.85 0 162.98 46.56 204.87 116 3.9 6.47 10.7 10.62 18.25 10.62 16.55 0 26.52-18.11 17.99-32.29-49.2-81.78-138.72-136.54-241.12-136.54H84.21c-11.65 0-21.1 9.45-21.1 21.1 0 11.66 9.45 21.11 21.1 21.11z m862.6 468.13L751.53 628.55c-18.06-10.43-40.64 2.61-40.64 23.47v99.48h-9.42c-86.85 0-162.98-46.56-204.87-116-3.9-6.47-10.7-10.62-18.25-10.62-16.55 0-26.52 18.11-17.99 32.29 49.2 81.78 138.72 136.54 241.12 136.54h9.42v83.8c0 20.86 22.58 33.9 40.64 23.47l195.27-112.74c18.06-10.45 18.06-36.52 0-46.95z" p-id="6831" fill="#ffffff"></path><path d="M710.27 273.87v97.17c0 20.86 22.58 33.9 40.64 23.47l195.27-112.74c18.07-10.43 18.07-36.5 0-46.93L750.91 122.09c-18.06-10.43-40.64 2.61-40.64 23.47v86.27c-146.67 8.97-255.16 131.52-295.79 280.5-55.29 153.52-138.82 239.17-270.7 239.17H84.21c-11.65 0-21.1 9.45-21.1 21.1s9.45 21.1 21.1 21.1h59.57c155.4 0 270.7-126.62 312.91-281.37 52.84-146.72 131.59-231.25 253.58-238.46z" p-id="6832" fill="#ffffff"></path></svg>
      <svg t="1574175126522" onClick={(e)=>{changeCurSong("PRE",e)}} style={{ marginLeft: '.6rem' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7250" width=".4rem" height=".4rem"><path d="M748.43 128.5L217.52 445.78V88.17c0-12.55-10.18-22.73-22.73-22.73s-22.73 10.18-22.73 22.73v848.65c0 12.55 10.18 22.73 22.73 22.73s22.73-10.18 22.73-22.73v-357.6L748.43 896.5c46.49 27.78 105.52-5.71 105.52-59.87V188.37c0-54.16-59.04-87.65-105.52-59.87z m60.05 708.14c0 8.61-3.95 14.21-7.27 17.37-4.65 4.45-10.91 7-17.14 7-4.25 0-8.39-1.18-12.33-3.54L229.36 533.34c-10.67-6.38-11.82-16.69-11.82-20.84 0-4.14 1.15-14.46 11.82-20.84l542.39-324.13c3.94-2.35 8.08-3.54 12.33-3.54 11.74 0 24.4 9.32 24.4 24.38v648.27z" p-id="7251" fill="#ffffff"></path></svg>
      <svg t="1574175168525" onClick={()=>statusDispatch({type:"CHANGECURSTATUS"})} style={{ display: !onPlaying ? 'block' : 'none', margin: '0 .4rem' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8055" width="1rem" height="1rem"><path d="M512.28 64.44C265.1 64.44 64.73 264.82 64.73 512S265.1 959.56 512.28 959.56 959.84 759.18 959.84 512 759.46 64.44 512.28 64.44z m0 877.22C275.37 941.66 82.63 748.91 82.63 512S275.37 82.34 512.28 82.34 941.94 275.09 941.94 512 749.2 941.66 512.28 941.66z" p-id="8056" fill="#ffffff"></path><path d="M665.19 490.14L443.65 356.05c-17.03-10.31-38.78 1.95-38.78 21.86v268.17c0 19.9 21.75 32.17 38.78 21.86l221.54-134.09c16.43-9.93 16.43-33.77 0-43.71z" p-id="8057" fill="#ffffff"></path></svg>
      <svg t="1574347901866" onClick={()=>statusDispatch({type:"CHANGECURSTATUS"})} style={{ display: onPlaying ? 'block' : 'none', margin: '0 .4rem' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1895" width="1rem" height="1rem"><path d="M512.1 65.27c-247 0-447.23 200.23-447.23 447.23S265.1 959.73 512.1 959.73 959.33 759.5 959.33 512.5 759.1 65.27 512.1 65.27z m0 876.57c-236.74 0-429.34-192.6-429.34-429.34S275.36 83.16 512.1 83.16s429.34 192.6 429.34 429.34-192.6 429.34-429.34 429.34z" p-id="1896" fill="#ffffff"></path><path d="M432.17 691.39c-19.76 0-35.78-16.02-35.78-35.78V369.39c0-19.76 16.02-35.78 35.78-35.78s35.78 16.02 35.78 35.78v286.23c0 19.75-16.02 35.77-35.78 35.77zM593.06 691.39c-19.76 0-35.78-16.02-35.78-35.78V369.39c0-19.76 16.02-35.78 35.78-35.78s35.78 16.02 35.78 35.78v286.23c0 19.75-16.02 35.77-35.78 35.77z" p-id="1897" fill="#ffffff"></path></svg>
      <svg t="1574175192327" onClick={(e)=>changeCurSong("NEXT",e)} style={{ marginRight: '.6rem' }} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8215" width=".4rem" height=".4rem"><path d="M277.57 896.5l530.91-317.28v357.61c0 12.55 10.18 22.73 22.73 22.73s22.73-10.18 22.73-22.73V88.17c0-12.55-10.18-22.73-22.73-22.73s-22.73 10.18-22.73 22.73v357.6L277.57 128.5c-46.49-27.78-105.52 5.71-105.52 59.87v648.27c0 54.15 59.04 87.64 105.52 59.86z m-60.05-708.14c0-8.61 3.95-14.21 7.27-17.37 4.65-4.45 10.91-7 17.14-7 4.25 0 8.39 1.18 12.33 3.54l542.39 324.13c10.67 6.38 11.82 16.69 11.82 20.84 0 4.14-1.15 14.46-11.82 20.84l-542.4 324.13c-3.94 2.35-8.08 3.54-12.33 3.54-11.74 0-24.4-9.32-24.4-24.38V188.36z" p-id="8216" fill="#ffffff"></path></svg>
      <svg t="1574175217048" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8374" width=".40rem" height=".40rem"><path d="M959.33 579.89c0 12.35-10.01 22.37-22.37 22.37H87.03c-12.35 0-22.37-10.01-22.37-22.37 0-12.35 10.01-22.37 22.37-22.37h849.93c12.36 0.01 22.37 10.02 22.37 22.37zM959.33 907.94c0 12.35-10.01 22.37-22.37 22.37H87.03c-12.35 0-22.37-10.01-22.37-22.37 0-12.35 10.01-22.37 22.37-22.37h849.93c12.36 0 22.37 10.01 22.37 22.37zM959.33 236.94c0 12.35-10.01 22.37-22.37 22.37H504.54c-12.35 0-22.37-10.01-22.37-22.37 0-12.35 10.01-22.37 22.37-22.37h432.42c12.36 0 22.37 10.01 22.37 22.37zM339.2 220.53L122.91 95.65c-12.63-7.29-28.42 1.82-28.42 16.41v249.75c0 14.59 15.79 23.7 28.42 16.41L339.2 253.35c12.63-7.3 12.63-25.53 0-32.82z" p-id="8375" fill="#ffffff"></path></svg>
    </div>
  </div>
};
export default PlayerTab;