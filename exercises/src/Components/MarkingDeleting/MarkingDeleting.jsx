import React, { useState } from 'react';
import './MarkingDeleting.css';

const MarkingDeleting = () => {

const arr=["one", "two", "three", "four", "five"];
let checkArr=[];
const inputRef=React.createRef();
const [checkBoxes,setCheckBoxes]=useState(arr);

const deleteHandler =()=>{
const copyArr=[...checkBoxes];
checkArr.forEach((x)=>{
    console.log(x);
    copyArr.splice(x, 1)});
checkArr=[];
setCheckBoxes(copyArr);
}

const checkHandler=(index)=>{
    checkArr.push(index);
    console.log(checkArr);
}

  
    return (
      <div>
          <button onClick={deleteHandler}>Delete</button>
          <button>Reset</button>
          <ul>
            {
                checkBoxes.map((x,index)=>(
                    <li key={index}><input type="checkbox" ref={inputRef} onChange={()=>checkHandler(index)}/>{x}</li>
                ))
            }
        </ul>
      </div>
    );
};

  export default MarkingDeleting;