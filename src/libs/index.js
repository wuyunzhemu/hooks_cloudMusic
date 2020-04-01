const throttle = (fn,delay=16)=>{
  let lastTime = 0;
  return ()=>{
    let nowTime = new Date().getTime();
    if(nowTime - lastTime > delay){
      fn();
      lastTime = nowTime;
    }
  }
}

export {
  throttle
}