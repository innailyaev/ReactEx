import React, { useState } from 'react';

const WhatsTheTime = () => {

  const secondsRef=React.createRef();
  const minutesRef=React.createRef();
  const hoursRef=React.createRef();
  const [sec,setSeconds]=useState(0);
  const [min,setMinutes]=useState(0);
  const [hour,setHours]=useState(0);


  const secondsHandler=()=>{
    setSeconds(secondsRef.current.value);
    setMinutes(secondsRef.current.value/60);
    setHours(secondsRef.current.value/3600);
  }       

  const minutesHandler=()=>{
    setSeconds(minutesRef.current.value*60);
    setMinutes(minutesRef.current.value);
    setHours(minutesRef.current.value/60);
  }       

  const hoursHandler=()=>{
    setSeconds(hoursRef.current.value*3600);
    setMinutes(hoursRef.current.value*60);
    setHours(hoursRef.current.value);
  }

    return (
      <div>
         <label htmlFor="">Seconds: </label><input ref={secondsRef} type="text" onChange={secondsHandler} value={sec}/>
         <label htmlFor="">Minutes: </label><input ref={minutesRef} type="text" onChange={minutesHandler} value={min} />
         <label htmlFor="">Hours: </label><input ref={hoursRef} type="text" onChange={hoursHandler} value={hour}/>
      </div>
    );
};

  export default WhatsTheTime;