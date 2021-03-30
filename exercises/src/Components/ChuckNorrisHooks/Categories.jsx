import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Categories = () => {

const [categories,setCategories]=useState([]);
const [joke,setJoke]=useState('');
const [randomJoke,setRandomJoke]=useState('');

useEffect(()=>{
    (async () =>{
        const response =await axios.get('https://api.chucknorris.io/jokes/categories');
        console.log(response.data);
        setCategories(response.data)
    })();
   
},[randomJoke]);
  
const changeHandler=async(e)=>{
    const data=await axios.get(`https://api.chucknorris.io/jokes/random?category=${e.target.value}`);
    setJoke(data.data.value)    
}

const clickHandler=()=>{
    setRandomJoke(joke);
    console.log(joke);
}

    return (
      <div>
           <select onChange={changeHandler}>
                <option value="" hidden>Select Joke category</option>
                    {
                        categories.map((c,index)=>{
                            return <option key={index} value={c}>{c}</option>
                        })
                    }
                </select>
            <input type="button" value="click" onClick={clickHandler}/>
                <h4>{randomJoke}</h4>
      </div>
    );
};

  export default Categories;