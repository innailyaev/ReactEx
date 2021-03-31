import React, { useState, useRef } from 'react';

const Editing = () => {

const [isToggle,setToggle]=useState(true);
const inputRef=useRef();

const clickHandler=()=>{
    console.log(inputRef.current);
    inputRef.current.focus();
    setToggle(!isToggle)   
}

return (
    <div>
        {
        isToggle ? <div><input type="text" ref={inputRef}/><button onClick={clickHandler}>Edit</button></div> : <div><input type="text" ref={inputRef}/><button onClick={()=>setToggle(!isToggle)}>Save</button></div>
        }

    </div>
);
};

export default Editing;