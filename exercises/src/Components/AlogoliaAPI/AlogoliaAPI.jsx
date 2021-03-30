import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AlogoliaAPI = () => {

const [msg,setMsg]=useState('none');
const [algoliaApi,setAlgoliaApi]=useState([]);
const [search,setSearch]=useState('');
const [query,setQuery]=useState('hooks');

const getApi = async () => {
    try{
        setMsg('none');
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
        setAlgoliaApi(response.data.hits)
       
    }catch(err){
            console.log(err); 
            setMsg('block');
    }
    
}

useEffect(()=>{
    getApi();
// eslint-disable-next-line react-hooks/exhaustive-deps
},[query]);
  

const changeHandler=(e)=>{
    setSearch(e.target.value);
}

const searchResults =()=>{
    setAlgoliaApi(null);
    setQuery(search);
    
}

    return (
      <div>
          <h1>Algolia search</h1>
          <input type="search" onChange={changeHandler} defaultValue={query}/>
          <input type="button" value="Search" onClick={searchResults}/>
        <ul>
          { (algoliaApi==null) ? (<h3>Loading...</h3>) : (
            
            algoliaApi.map((x,index)=>{
                    return <li key={index}><a href={x.url} target='blank'>{x.title}</a></li>
            })      
          )}
        </ul>
          <h2 style={{display:msg}} >Failed</h2>
                 
      </div>
    );
};

  export default AlogoliaAPI;