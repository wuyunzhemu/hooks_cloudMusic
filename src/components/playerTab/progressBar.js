import React, { useState, useEffect } from 'react';
const PLAYINGSPEED = 1000; // 播放速度 每秒播放一秒（一倍速）
let timer = null;
const ProgressBar = props => {
  // console.log(props);
  const { onPlaying = false, duration = 0, curSongIndex = 0 ,getPlayTime} = props;
  const [curPlayTime, setCurPlayTime] = useState(0); //当前播放时间（毫秒）
  // console.log(curPlayTime);

  //计时器 播放状态时每秒更新一次当前播放位置
  useEffect(() => {
    
    setTimer();
  }, [onPlaying])


  //切换歌曲时 重置当前播放时长及定时器
  useEffect(()=>{
    setCurPlayTime(0);
    if(timer){
      clearInterval(timer);
    }
    setTimer();
  },[curSongIndex])

  //注册定时器
  const setTimer = ()=>{
    // 如果播放中则注册定时器，否则记录当前播放位置(防止暂停引起的一秒计时重置) 注销定时器
    if (onPlaying) {
      if (curPlayTime >= duration) {
        clearInterval(timer);
        timer = null;
        return ;
      }
      timer = setInterval(() => {
        if (onPlaying === true) {
          // 批量更新机制会导致状态重复更新为同一个值，setState(fn)则会将函数放入事件队列中，然后按顺序执行，达到更新状态的效果
          setCurPlayTime(curPlayTime => curPlayTime + PLAYINGSPEED)
        }
      }, 1000)
    }
    else{
      //调用父组件回调获取当前播放位置，用state保存
      setCurPlayTime(getPlayTime()*1000);
      clearInterval(timer);
      timer = null;
    }
  }

  //将毫秒转化为分：秒形式
  const formatTime = (time) => {
    let sec = parseInt((time / 1000) % 60);
    let min = parseInt((time / 1000) / 60);
    if (min <= 9) {
      min = '0' + min;
    }
    if (sec <= 9) {
      sec = '0' + sec;
    }
    return min + ':' + sec;
  }

  return <div>
    <span>{formatTime(curPlayTime)}</span>
    <div>       ---------------------        </div>
    <span>{formatTime(duration)}</span>
  </div>
}
export default ProgressBar;