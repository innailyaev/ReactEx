import React, { useEffect, useState } from 'react';
import axios from 'axios';


const AlogoliaAPI = () => {

const [loader,setLoader]=useState('none');
const [algoliaApi,setAlgoliaApi]=useState([]);
const [search,setSearch]=useState('hooks');

const getApi = async () => {
    try{
        setLoader('block');
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${search}`);
        setAlgoliaApi(response.data.hits)
        setLoader('none');
    }catch(err){
            console.log(err);   
    }
    
}

useEffect(()=>{
    getApi();
},[]);
  

const changeHandler=(e)=>{
    setSearch(e.target.value);
}

const searchResults =()=>{
    setSearch(search);
    getApi();
}

    return (
      <div>
          <h1>Algolia search</h1>
          <input type="search" onChange={changeHandler} defaultValue={search}/>
          <input type="button" value="Search" onClick={searchResults}/>
          <h3 style={{display:loader}}>Loading...</h3>
            <ul>{
                    algoliaApi.map((x,index)=>{
                        return <li key={index}><a href={x.title}>{x.title}</a></li>
                    })
                }  
            </ul>          
      </div>
    );
};

  export default AlogoliaAPI;