import React, { useEffect, useState } from 'react';
import axios from 'axios';


const FetchData = () => {
    const [joke,setJoke]=useState('');
    
    useEffect(()=>{
        const getData = async () => {
            const response =await axios.get('https://api.chucknorris.io/jokes/random');
            setJoke(response.data.value);
            console.log('useEffect');
        };
        const timeoutId = setTimeout(() => {
             getData();
        }, 500);
    
        return () => {
            clearTimeout(timeoutId);
        }; 
    },[]);

    return (
      <div>
        <div>{joke}</div>
      </div>
    );
};


const CancelRequest = () => {

const [isToggleOn,setToggle]=useState(true);
const [showData,setShowData]=useState(true);

const clickHandler=()=>{
    console.log(isToggleOn);
    setToggle(!isToggleOn); 
    setShowData(!showData); 
}

return (
    <div>
        <button onClick={clickHandler}>
            {isToggleOn ? 'Dispaly data' : 'Hide data'}
        </button>
            {!(showData) ? <FetchData/> : null}

    </div>
);
};

export default CancelRequest;