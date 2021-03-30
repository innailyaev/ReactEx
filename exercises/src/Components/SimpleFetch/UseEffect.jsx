import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SimpleFetch = () => {
    const [title,setTitle] = useState('');
    const [director,setDirector]=useState('');

useEffect(()=>{
    (async () =>{
        const response =await axios.get('https://swapi.dev/api/films/1/');
        setTitle(response.data.title);
        setDirector(response.data.director);
    })();
   
},[]);
  

    return (
      <div>
        <h2>{title}</h2>
        <h2>{director}</h2>
      </div>
    );
};

  export default SimpleFetch;