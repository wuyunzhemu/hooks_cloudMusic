import React, { useState, useEffect } from 'react';
const PLAYINGSPEED = 1000; // 播放速度 每秒播放一秒（一倍速）
let timer = null;
const ProgressBar = props => {
  // console.log(props);
  const { onPlaying, duration = 0 } = props;
  const [curPlayTime, setCurPlayTime] = useState(0); //当前播放时间（毫秒）
  console.log(curPlayTime);
  useEffect(() => {
    // 如果播放中则注册定时器，否则注销定时器
    if (onPlaying) {
      timer = setInterval(() => {
        if (curPlayTime >= duration) {
          clearInterval(timer);
          timer = null;
          return;
        }
        if (onPlaying === true) {
          console.log('cur:' + curPlayTime)
          setCurPlayTime(curPlayTime => curPlayTime + PLAYINGSPEED)
        }
      }, 1000)
    }
    else{
      clearInterval(timer);
      timer = null;
    }
  }, [onPlaying])
  //计时器 每秒更新一次当前播放位置


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