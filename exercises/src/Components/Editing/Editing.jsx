import React, { useEffect, useState, useRef } from 'react';

const Editing = () => {

const [isEditToggle,setEditToggle]=useState(false);
const [btnToggle,setBtnToggle]=useState(true);
const inputRef=useRef();

useEffect(()=>{
    if(isEditToggle){
        inputRef.current.focus();
    }
   
},[isEditToggle])


const clickHandler=()=>{
    setEditToggle(!isEditToggle)   
    setBtnToggle(!btnToggle);   
}

return (
    <div>
        {
        isEditToggle ? <input type="text" ref={inputRef}/> : null
        }
        <button onClick={clickHandler}>{btnToggle ? 'Edit' : 'Save'}</button>

    </div>
);
};

export default Editing;