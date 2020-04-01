import React, { useState, useEffect, useContext,useRef } from 'react';
import playStatus from '../../store/playStatusState/index';
import {throttle} from '../../libs'
import './progressBar.css'
let timer = null;
const ProgressBar = props => {
  // console.log(props);
  const { state:playStatusState,dispatch:statusDispatch } = useContext(playStatus.playStatusContext);
  const { changeCurSong, onPlaying = false, duration = 0, curSongIndex = 0, getPlayTime,setPlayTime } = props;
  const [curPlayTime, setCurPlayTime] = useState(0); //当前播放时间（毫秒）
  const el = useRef()

  useEffect(()=>{

  },[curPlayTime])
  //计时器 播放状态时每秒更新一次当前播放位置
  useEffect(() => {
    setTimer();
  }, [onPlaying])


  //切换歌曲时 重置当前播放时长及定时器
  useEffect(() => {
    setCurPlayTime(0);
    if (timer) {
      clearInterval(timer);
    }
    setTimer();
  }, [curSongIndex])

   //注册定时器
   const setTimer = () => {
    // 如果播放中则注册定时器，否则记录当前播放位置(防止一秒内多次暂停导致状态不更新) 注销定时器
    if (onPlaying === true) {
      timer = setInterval(() => {
        // 由于闭包的存在，若直接setState（curPlayTime+1000）中的curPlayTime永远是0，无法更新状态，setState（fn）以回调函数形式运行，会获取最新state
        setCurPlayTime((curPlayTime) => {
          if (curPlayTime+1000 >= duration) {
            changeCurSong("NEXT");
            clearInterval(timer);
            return 0;
          }
          return parseInt(getPlayTime() * 1000);
        });
      }, 1000)
    }
    else {
      //调用父组件回调获取当前播放位置，用state保存
      setCurPlayTime(parseInt(getPlayTime()) * 1000);
      clearInterval(timer);
      timer = null;
    }
  }

  // 进度条拖动事件
  const dragBar = (e)=>{
    if(el.current){
      let touchX = e.touches[0].clientX;
      let wrapOffsetX = el.current.getBoundingClientRect().x;
      let wrapWidth = el.current.getBoundingClientRect().width;
      // 当拖动超过播放器长度时，当前播放时间等于最大长度
      let tempTime = touchX-wrapOffsetX<wrapWidth?(touchX-wrapOffsetX)/wrapWidth*duration:duration;
      tempTime = tempTime>0?tempTime:0;
      setCurPlayTime(tempTime)
      setPlayTime(parseInt(curPlayTime/1000))
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
  // 容器高度较高，易于触发触摸事件，体验较好
  return <div onTouchMove={(e)=>throttle(dragBar(e))} className="progressBar">
    <span className="timeText">{formatTime(curPlayTime)}</span>
    <div ref={el}  className="barWrap">
      <div className="barInner" style={{ width: curPlayTime / duration * 100 + '%' }}>
        <div className="barDot"></div>
      </div>
    </div>
    <span className="timeText">{formatTime(duration)}</span>
  </div>
}
export default ProgressBar;