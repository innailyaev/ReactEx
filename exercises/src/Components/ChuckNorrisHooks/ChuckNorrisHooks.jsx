import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from './Categories';


const ChuckNorrisHooks = () => {

const [joke,setJoke]=useState('');
const [randomJoke,setRandomJoke]=useState('');

useEffect(()=>{
    (async () =>{
        const response =await axios.get('https://api.chucknorris.io/jokes/random');
        setJoke(response.data.value);
    })();
   
},[randomJoke]);
  
const clickHandler=()=>{
    setRandomJoke(joke)
}

    return (
      <div>
          <input type="button" value="Click" onClick={clickHandler}/>
          <h4>{randomJoke}</h4>
          <Categories/>
      </div>
    );
};

  export default ChuckNorrisHooks;